import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './component/Context';
import Routes from './component/Routes';
import './component/MutliLanguage/i18n';
import './App.css';

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <ContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextProvider>
    </Suspense>
  );
};

export default App;
