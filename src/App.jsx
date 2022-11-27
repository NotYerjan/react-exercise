import DisplayLanguage from "./DisplayLanguage";
import Greeting from "./Greeting";

import { createContext, useState } from "react";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  const greetings = {
    en: "Hello",
    tr: "Merhaba",
    ru: "Привет",
    kz: "Сәлем",
  };

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage, greetings }}>
        <DisplayLanguage />
        <Greeting />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
