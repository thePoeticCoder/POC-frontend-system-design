import Link from "next/link";
import React from "react";
import { IconType } from "../types";

type SidebarPropsType = {
  linkText: string;
  route: string;
  extraRoute?: string;
  currentRoute: string;
  inActiveLinkStyle: string;
  activeLinkStyle: string;
  IconComponent: ({ height, width, color, className }: IconType) => JSX.Element;
};

export const SideBarLink = ({
  linkText,
  route,
  extraRoute,
  currentRoute,
  inActiveLinkStyle,
  activeLinkStyle,
  IconComponent,
}: SidebarPropsType) => {
  return (
    <Link href={route}>
      <a
        className={
          inActiveLinkStyle +
          " " +
          (currentRoute === route || currentRoute === extraRoute
            ? activeLinkStyle
            : route)
        }
      >
        <IconComponent />
        {linkText}
      </a>
    </Link>
  );
};
