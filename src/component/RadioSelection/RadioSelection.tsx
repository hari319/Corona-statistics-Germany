import React, { useContext } from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Context } from '../Context';
import './RadioSelection.css';

const RadioSelection = () => {
  const { t } = useTranslation();
  const { radioValue, setRadioValue, showTableChart, setShowTableChart } =
    useContext(Context);

  return (
    <div className={'radio'}>
      <h1>{t('RADIOTAG')}</h1>
      <RadioGroup
        aria-label="Selection"
        name="Selection"
        value={radioValue}
        onChange={(e) => {
          setRadioValue(e.target.value);
          setShowTableChart(showTableChart === true && false);
        }}
        row
        className={'radioSelection'}
      >
        <FormControlLabel
          value={'states'}
          control={<Radio />}
          label={t('STATE')}
        />
        <FormControlLabel
          value={'districts'}
          control={<Radio />}
          label={t('DISTRICTS')}
        />
      </RadioGroup>
    </div>
  );
};

export default RadioSelection;
