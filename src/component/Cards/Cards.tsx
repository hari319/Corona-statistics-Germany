import React, { useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading/Loading';
import { fetchDataGermany } from '../../api/api';
import styles from './Cards.module.css';
import { Context, Data } from '../Context';

const Cards = () => {
  const { t } = useTranslation();
  const { data, setData } = useContext(Context);

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

  function getStyles(e: Data) {
    switch (true) {
      case e.type === 'Confirmed' || e.type === 'Infektionen':
        return styles.Confirmed;
      case e.type === 'Recovered' || e.type === 'Genesen':
        return styles.Recovered;
      case e.type === 'Deaths' || e.type === 'Todesfälle':
        return styles.Deaths;
    }
  }

  function getIcon(e: Data) {
    switch (true) {
      case e.type === 'Confirmed' || e.type === 'Infektionen':
        return 'https://img.icons8.com/pastel-glyph/50/fa314a/coronavirus--v3.png';
      case e.type === 'Recovered' || e.type === 'Genesen':
        return 'https://img.icons8.com/ios-filled/50/26e07f/recovery.png';
      case e.type === 'Deaths' || e.type === 'Todesfälle':
        return 'https://img.icons8.com/ios-filled/50/000000/death.png';
    }
  }

  return data ? (
    <div className={styles.container}>
      <h1 className={styles.h1}>CORONA Tracker for Germany</h1>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {data.map((e: Data, i: number) => {
          return (
            <Grid
              item
              xs={12}
              md
              className={cx(styles.card, getStyles(e))}
              key={i}
            >
              <Card className={cx(styles.innerCard)}>
                <CardContent>
                  <img src={getIcon(e)} alt={e.type} />
                  <Typography gutterBottom>{e.type}</Typography>
                  <Typography variant="h4">
                    <CountUp
                      start={0}
                      end={e.number}
                      duration={2.5}
                      separator="."
                    />
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    {e.difference > 0 ? '+' : ''}
                    <CountUp
                      start={0}
                      end={e.difference}
                      duration={2.5}
                      separator="."
                    />
                  </Typography>
                  <Typography>
                    {new Date(e.lastUpdate).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
