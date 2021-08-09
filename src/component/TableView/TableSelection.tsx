/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import TableView from './TableView';
import TableViewCollapse from './TableViewCollapse';
import { Context, CountryData } from '../Context';

function createData(
  date: Date,
  cases: number,
  recovered: number,
  deaths: number,
  name: string
): CountryData {
  return { date, cases, recovered, deaths, name };
}

const TableSelection = () => {
  const { selectedState, weeks, stateData, districtsData, radioValue } =
    useContext(Context);
  const [rowsState, setRowsState] = React.useState<CountryData[]>([]);
  const [rowsDistricts, setDistricts] = React.useState<CountryData[]>([]);

  const setState = () => {
    if (Array.isArray(stateData)) {
      stateData.forEach((e) => {
        setRowsState((row) => [
          ...row,
          createData(e.date, e.cases, e.recovered, e.deaths, e.name),
        ]);
      });
    } else {
      let newTableData: CountryData = stateData;
      var today: any = new Date().toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      setRowsState((row) => [
        ...row,
        createData(
          today,
          newTableData.cases,
          newTableData.recovered,
          newTableData.deaths,
          newTableData.name
        ),
      ]);
    }
  };

  useEffect(() => {
    setRowsState([]);
    if (districtsData.length > 0 || stateData) {
      setDistricts(districtsData);
      setState();
    }
  }, [stateData]);

  return selectedState.code === 'all' && weeks.toString() === '0' ? (
    <TableViewCollapse rows={rowsState} rowsDistricts={rowsDistricts} />
  ) : (
    <TableView rows={rowsState} type={radioValue} />
  );
};

export default TableSelection;
