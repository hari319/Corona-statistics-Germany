import React, { useEffect, useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Context, StateData } from '../Context';
import './Chart.css';

const Chart = () => {
  const { t } = useTranslation();
  const { selectedState, stateData } = useContext(Context);
  const [Cases, setCases] = useState<number[]>([]);
  const [Label, setLabel] = useState<string | Date[]>([]);
  const [Deaths, setDeaths] = useState<number[]>([]);
  const [Recovered, setRecovered] = useState<number[]>([]);
  const value: number = 7;

  useEffect(() => {
    stateData &&
      stateData.length > 0 &&
      stateData.forEach((e: StateData) => {
        setLabel((label: any) => [
          ...label,
          selectedState.code === 'all' ? e.state : e.date,
        ]);
        setCases((cases: number[]) => [...cases, e.cases]);
        setDeaths((deaths: number[]) => [...deaths, e.deaths]);
        setRecovered((recovered: number[]) => [...recovered, e.recovered]);
      });
  }, [stateData, selectedState]);

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

  return stateData && stateData.length > 0 ? (
    <div className={'Chart'}>
      <h1 className={'h1'}>{t('CHARTTAG')}</h1>
      <Bar data={ChartData} options={chartOptions}></Bar>
    </div>
  ) : (
    <></>
  );
};

export default Chart;
