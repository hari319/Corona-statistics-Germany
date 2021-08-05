import React from 'react';
import { Container } from '@material-ui/core';
import Cards from './Cards/Cards';
import FormBuilder from './Form/FormBuilder';
import TableSelection from './TableView/TableSelection';
import Chart from './Chart/Chart';

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Cards />
      <FormBuilder />
      <TableSelection />
      <Chart></Chart>
    </Container>
  );
};

export default Dashboard;
