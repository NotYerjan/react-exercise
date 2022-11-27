import React, { useContext } from "react";
import { LanguageContext } from "./App";

export default function DisplayLanguage() {
  const { setLanguage, language } = useContext(LanguageContext);

  return (
    <>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="kz">Kazakh</option>
        <option value="ru">Russian</option>
        <option value="tr">Turkish</option>
      </select>
    </>
  );
}
