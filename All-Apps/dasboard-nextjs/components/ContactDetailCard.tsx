import React from "react";
import { ContactDetailCardPropsType } from "../types/contactDetailCardProp.types";

export const ContactDetailCard = ({
  title,
  name,
  email,
  number,
  heading,
}: ContactDetailCardPropsType) => {
  return (
    <div>
      <h2 className={heading}>{title}</h2>
      <p>Name : {name}</p>
      <p>Phone : {number}</p> 
      <a className="link-text-color" href={`mailto:${email}`}>
        <p>email: {email}</p>
      </a>
    </div>
  );
};
