import DisplayLanguage from "./DisplayLanguage";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
