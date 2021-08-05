import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import CoronaLogo from '../../imgs/Corona.png';
import './MainHeader.css';

const MainHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={'root'}>
      <AppBar position="static">
        <Toolbar className={'toolbar'}>
          <div className={'header-div'}>
            <span className={'header-img'}>
              <img
                style={{ height: 40 }}
                alt={'Corona-Icon'}
                src={CoronaLogo}
              />
            </span>
            <h1 className={'header-h1'}>{t('HEADER')}</h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
