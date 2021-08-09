import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { Context, CountryData } from '../Context';
import './Chart.css';

const Chart = (props: { chartData: CountryData[] }) => {
  const { chartData } = props;
  const { t } = useTranslation();
  const { selectedState } = useContext(Context);
  let Cases: number[] = [];
  let Label: any[] = [];
  let Deaths: number[] = [];
  let Recovered: number[] = [];
  const value: number = 7;

  function getLabel(e: CountryData) {
    switch (true) {
      case selectedState.code !== 'all':
        return e.date;
      default:
        return e.name + ' ' + e.date;
    }
  }

  chartData.length > 0 &&
    chartData.forEach((e: CountryData) => {
      Cases.push(e.cases);
      Label.push(getLabel(e));
      Deaths.push(e.deaths);
      Recovered.push(e.recovered);
    });

  const ChartData = {
    labels: Label.slice(-value),

    type: 'polarArea',
    datasets: [
      {
        data: Cases.slice(-value),
        backgroundColor: '#ff3333',
        label: t('CASES'),
      },

      {
        data: Recovered.slice(-value),
        backgroundColor: '#008000',
        label: t('RECOVERED'),
      },

      {
        data: Deaths.slice(-value),
        backgroundColor: '#000000',
        label: t('DEATHS'),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    datetainAspectRatio: false,
  };

  function getText() {
    switch (true) {
      case selectedState.code === 'all':
        return t('GERMANY');
      default:
        return selectedState.name;
    }
  }

  return chartData.length > 0 ? (
    <Paper className={'Chart'}>
      <h1 className={'h1'}>
        {t('CHARTTAG')}
        {getText()}
      </h1>
      <Bar data={ChartData} options={chartOptions}></Bar>
    </Paper>
  ) : (
    <></>
  );
};

export default Chart;
