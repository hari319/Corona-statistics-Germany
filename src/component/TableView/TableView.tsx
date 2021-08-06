import React, { useState, useContext, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TableContainer,
  TablePagination,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { StateData, Context } from '../Context';
import { StyledTableRow, StyledTableCell, getImage } from './HelperComponent';
import styles from './TableView.module.css';
import Chart from '../Chart/Chart';

interface Column {
  id: 'state' | 'date' | 'cases' | 'recovered' | 'deaths';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface TableViewProps {
  rows: StateData[];
  type: string;
}

const TableView: React.FC<TableViewProps> = ({ rows, type }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const typeBool: boolean = type === 'state';
  const { selectedState } = useContext(Context);
  const [chartData, setChartData] = useState<any[]>([]);

  const columns: Column[] = [
    {
      id: 'state',
      label: typeBool ? t('STATE') : t('DISTRICTS'),
      minWidth: 170,
    },
    { id: 'date', label: t('DATE'), minWidth: 100 },
    { id: 'cases', label: t('CASES'), minWidth: 100 },
    {
      id: 'recovered',
      label: t('RECOVERED'),
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'deaths',
      label: t('DEATHS'),
      minWidth: 100,
      align: 'right',
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let data: any[] = [];
    rows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .forEach((row: any, i) => {
        data.push(row);
      });
    setChartData(data);
  }, [page, rows, rowsPerPage]);

  return rows.length > 0 ? (
    <>
      <Paper className={styles.paper}>
        <h1 className={styles.h1}>
          {t('TABLETAG')}
          {type === 'state' ? selectedState.name : t('DISTRICTS')}
        </h1>
        <TableContainer className={styles.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={'center'}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, i) => {
                  return (
                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns.map((column: Column, index: number) => {
                        const value =
                          row[
                            index === 0 && type !== 'state'
                              ? 'districts'
                              : column.id
                          ];
                        return (
                          <StyledTableCell key={column.id} align={'center'}>
                            {column.id === 'state' &&
                              getImage(
                                row[typeBool ? 'state' : 'districts'],
                                type
                              )}
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Chart chartData={chartData} type={type} />
    </>
  ) : (
    <></>
  );
};

export default TableView;
