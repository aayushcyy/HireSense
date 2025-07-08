import React from "react";

export default function Button({ text = "button", classname }) {
  return <div className={`${classname} cursor-pointer`}>{text}</div>;
}
