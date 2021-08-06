import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './component/Header/MainHeader';
import LanguageSelect from './component/MutliLanguage/LanguageSelect';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <>
      <MainHeader />
      <div className={'Lang'}>
        <LanguageSelect />
      </div>
      <App />
    </>
  </React.StrictMode>,
  rootElement
);
