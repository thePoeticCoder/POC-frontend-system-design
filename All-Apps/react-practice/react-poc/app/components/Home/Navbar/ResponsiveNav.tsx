/** @format */
"use client";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <Nav openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </div>
  );
};

export default ResponsiveNav;
