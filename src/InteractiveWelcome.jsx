import React, { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Welcome name={name} />
    </>
  );
}
