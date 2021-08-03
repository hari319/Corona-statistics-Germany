import { Suspense, useContext } from 'react';
import ContextProvider, { Context } from './component/Context';
import MainHeader from './component/Header/MainHeader';
import LanguageSelect from './component/MutliLanguage/LanguageSelect';
import Dashboard from './component/Dashboard';
import Loading from './component/Loading/Loading';
import './component/MutliLanguage/i18n';
import './App.css';

const App = () => {
  const { data } = useContext(Context);
  return (
    <Suspense fallback="...">
      <ContextProvider>
        {data.length > 0 ? (
          <>
            <MainHeader />
            <div className={'Lang'}>
              <LanguageSelect />
            </div>
            <Dashboard />
          </>
        ) : (
          <Loading />
        )}
      </ContextProvider>
    </Suspense>
  );
};

export default App;
