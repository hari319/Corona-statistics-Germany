import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Loading from '../Loading/Loading';
import styles from './Cards.module.css';
import { Context, Data } from '../Context';

const Cards = () => {
  const { t } = useTranslation();
  const { data } = useContext(Context);

  function getItem(e: Data, type: number) {
    switch (true) {
      case e.type === 'Confirmed' || e.type === 'Infektionen':
        return type === 0
          ? styles.Confirmed
          : 'https://img.icons8.com/pastel-glyph/50/fa314a/coronavirus--v3.png';
      case e.type === 'Recovered' || e.type === 'Genesen':
        return type === 0
          ? styles.Recovered
          : 'https://img.icons8.com/ios-filled/50/26e07f/recovery.png';
      case e.type === 'Deaths' || e.type === 'Todesfälle':
        return type === 0
          ? styles.Deaths
          : 'https://img.icons8.com/ios-filled/50/000000/death.png';
    }
  }

  return data ? (
    <div className={styles.container}>
      <h1 className={styles.h1}>{t('CARDTAG')}</h1>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {data.map((e: Data, i: number) => {
          return (
            <Grid
              item
              xs={12}
              md
              className={cx(styles.card, getItem(e, 0))}
              key={i}
            >
              <Card className={cx(styles.innerCard)}>
                <CardContent>
                  <img src={getItem(e, 1)} alt={e.type} />
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
