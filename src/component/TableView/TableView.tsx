import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { StateData } from '../Context';
import { StyledTableRow, StyledTableCell, getImage } from './HelperComponent';

interface Column {
  id: 'state' | 'date' | 'cases' | 'recovered' | 'deaths';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  container: {
    maxHeight: 440,
  },
  h1: {
    textAlign: 'center',
  },
});

interface TableViewProps {
  rows: StateData[];
  type: string;
}

const TableView: React.FC<TableViewProps> = ({ rows, type }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const typeBool: boolean = type === 'state';

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

  return rows.length > 0 ? (
    <Paper className={classes.root}>
      <h1 className={classes.h1}>{t('TABLETAG')}</h1>
      <TableContainer className={classes.container}>
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
                    {columns.map((column: any, index: number) => {
                      const value = row[index === 0 ? 'districts' : column.id];
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
  ) : (
    <></>
  );
};

export default TableView;
