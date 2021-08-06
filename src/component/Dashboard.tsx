import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Context } from './Context';
import Cards from './Cards/Cards';
import TableViewBuilder from './TableView/TableViewBuilder';
import TableSelection from './TableView/TableSelection';
import Loading from './Loading/Loading';
import { fetchDataGermany } from '../api/api';

const Dashboard = () => {
  const { data, setData } = useContext(Context);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchDataGermany();
      if (response) {
        setData([
          {
            type: t('CONFIRM'),
            number: response.cases,
            difference: response.delta.cases,
            lastUpdate: response.meta.lastUpdate,
          },
          {
            type: t('RECOVERED'),
            number: response.recovered,
            difference: response.delta.recovered,
            lastUpdate: response.meta.lastUpdate,
          },
          {
            type: t('DEATHS'),
            number: response.deaths,
            difference: response.delta.deaths,
            lastUpdate: response.meta.lastUpdate,
          },
        ]);
      }
    }
    fetchData();
  }, [t, setData]);

  return data.length > 0 ? (
    <>
      <Container component="main" maxWidth="lg">
        <Cards />
        <TableViewBuilder />
        <TableSelection />
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default Dashboard;
