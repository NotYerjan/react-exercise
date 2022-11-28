import React from "react";

export default function Sum({ numbers }) {
  return <h1>{numbers.reduce((current, number) => current + number)}</h1>;
}
