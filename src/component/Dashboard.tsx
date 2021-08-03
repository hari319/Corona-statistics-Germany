import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Cards from './Cards/Cards';
import CountryPicker from './CountryPicker/CountryPicker';
import WeeksPicker from './WeeksPicker/WeeksPicker';
import Button from './Button';
import TableView from './TableView/TableView';
import Chart from './Chart/Chart';

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="md">
      <Cards />
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={4}>
          <CountryPicker />
        </Grid>
        <Grid item xs={4}>
          <WeeksPicker />
        </Grid>
        <Grid item xs={3}>
          <Button />
        </Grid>
      </Grid>
      <TableView />
      <Chart></Chart>
    </Container>
  );
};

export default Dashboard;
