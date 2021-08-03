import React, { useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import Loading from '../Loading/Loading';
import { fetchDataGermany } from '../../api/api';
import styles from './Cards.module.css';
import { Context, Data } from '../Context';

const Cards = () => {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchDataGermany();
      if (response) {
        setData([
          {
            type: 'Confirmed',
            number: response.cases,
            difference: response.delta.cases,
            lastUpdate: response.meta.lastUpdate,
          },
          {
            type: 'Recovered',
            number: response.recovered,
            difference: response.delta.recovered,
            lastUpdate: response.meta.lastUpdate,
          },
          {
            type: 'Deaths',
            number: response.deaths,
            difference: response.delta.deaths,
            lastUpdate: response.meta.lastUpdate,
          },
        ]);
      }
    }
    fetchData();
  }, [data, setData]);

  return data ? (
    <div className={styles.container}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {data.map((e: Data, i: number) => {
          return (
            <Grid
              item
              xs={12}
              md
              className={cx(
                styles.card,
                e.type === 'Confirmed'
                  ? styles.Confirmed
                  : e.type === 'Recovered'
                  ? styles.Recovered
                  : styles.Deaths
              )}
              key={i}
            >
              <Card className={cx(styles.innerCard)}>
                <CardContent>
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
