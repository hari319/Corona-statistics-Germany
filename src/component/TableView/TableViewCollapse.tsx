import React from 'react';
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
  makeStyles,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';
import { StateData } from '../Context';
import { StyledTableRow, StyledTableCell, getImage } from './HelperComponent';
import TableView from './TableView';

interface TableViewCollapseProps {
  rows: StateData[];
  rowsDistricts: any[];
}

interface Column {
  id: 'id' | 'state' | 'date' | 'cases' | 'recovered' | 'deaths';
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

const TableViewCollapse: React.FC<TableViewCollapseProps> = ({
  rows,
  rowsDistricts,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(0);

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

  return (
    <Paper className={classes.root}>
      <h1 className={classes.h1}>{t('TABLETAG')}</h1>
      <TableContainer className={classes.container}>
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
              .map((row: any, index: any) => {
                return (
                  <>
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      {columns.map((column, i) => {
                        const value = row[column.id];
                        return (
                          <StyledTableCell key={i} align={'center'}>
                            {i > 0 ? (
                              <>
                                {column.id === 'state' &&
                                  getImage(row['state'], 'state')}
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </>
                            ) : (
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => {
                                  setCollapse(i);
                                  setOpen(!open);
                                }}
                              >
                                {open ? (
                                  <KeyboardArrowUpIcon />
                                ) : (
                                  <KeyboardArrowDownIcon />
                                )}
                              </IconButton>
                            )}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        {rowsDistricts.map((e) => {
                          const rowsDistrict: any = Object.values(e)[0];
                          return (
                            row.state.includes(Object.keys(e)) && (
                              <Collapse in={open} timeout="auto" unmountOnExit>
                                <TableView
                                  rows={rowsDistrict}
                                  type={'districts'}
                                />
                              </Collapse>
                            )
                          );
                        })}
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
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
  );
};

export default TableViewCollapse;
