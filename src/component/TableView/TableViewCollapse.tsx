import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TableContainer,
  TablePagination,
  Collapse,
  IconButton,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';
import { StateData, DistrictsData } from '../Context';
import { StyledTableRow, StyledTableCell, getImage } from './HelperComponent';
import TableView from './TableView';
import styles from './TableView.module.css';
import Chart from '../Chart/Chart';

interface TableViewCollapseProps {
  rows: StateData[];
  rowsDistricts: DistrictsData[];
}

interface Column {
  id: 'id' | 'state' | 'date' | 'cases' | 'recovered' | 'deaths';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const RowBuilder = (props: {
  row: any;
  index: number;
  columns: Column[];
  rowsDistricts: DistrictsData[];
}) => {
  const { row, index, columns, rowsDistricts } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
        {columns.map((column: Column, i: number) => {
          const value = row[column.id];
          return (
            <StyledTableCell key={i} align={'center'}>
              {i > 0 ? (
                <>
                  {column.id === 'state' && getImage(row['state'], 'state')}
                  {column.format && typeof value === 'number'
                    ? column.format(value)
                    : value}
                </>
              ) : (
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              )}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ padding: open ? 35 : 0 }} colSpan={6}>
          {rowsDistricts.map((e: DistrictsData) => {
            const rowsDistrict: any = Object.values(e)[0];
            return (
              row.state.includes(Object.keys(e)) && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <TableView rows={rowsDistrict} type={'districts'} />
                </Collapse>
              )
            );
          })}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

const TableViewCollapse: React.FC<TableViewCollapseProps> = ({
  rows,
  rowsDistricts,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [chartData, setChartData] = useState<any[]>([]);

  const columns: Column[] = [
    { id: 'id', label: '', minWidth: 1 },
    { id: 'state', label: t('STATE'), minWidth: 150 },
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

  return (
    <>
      <Paper className={styles.paper}>
        <h1 className={styles.h1}>
          {t('TABLETAG')}
          {t('GERMANY')}
        </h1>
        <TableContainer className={styles.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <StyledTableCell
                    key={i}
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
                .map((row: StateData, index: number) => {
                  return (
                    <RowBuilder
                      row={row}
                      index={index}
                      columns={columns}
                      rowsDistricts={rowsDistricts}
                    />
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

      <Chart chartData={chartData} type={'state'} />
    </>
  );
};

export default TableViewCollapse;
