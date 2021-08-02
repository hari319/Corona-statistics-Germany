import { Suspense } from "react";
import ContextProvider from "./component/Context";
import MainHeader from "./component/Header/MainHeader";
import LanguageSelect from "./component/MutliLanguage/LanguageSelect";
import Dashboard from "./component/Dashboard";
import "./component/MutliLanguage/i18n";
import "./App.css";

function App() {
  return (
    <Suspense fallback="...">
      <ContextProvider>
        <MainHeader />
        <div className={"Lang"}>
          <LanguageSelect />
        </div>
        <Dashboard />
      </ContextProvider>
    </Suspense>
  );
}

export default App;
