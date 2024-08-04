import React from "react";

export const Button = ({ content, handle }) => {
  return <button onClick={handle}>{content}</button>;
};
