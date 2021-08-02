import React, { useContext, useEffect } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import { Context } from "../Context";

interface Column {
  id: "date" | "cases" | "recovered" | "deaths";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "date", label: "Date", minWidth: 170 },
  { id: "cases", label: "Cases", minWidth: 100 },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 170,
    align: "right",
  },
  {
    id: "deaths",
    label: "Deaths",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  date: Date;
  cases: number;
  recovered: number;
  deaths: number;
}

function createData(
  date: any,
  cases: number,
  recovered: number,
  deaths: number
): Data {
  return { date, cases, recovered, deaths };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 20,
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#93F100",
      color: "#000000",
      fontWeight: "bold",
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const TableView = () => {
  const { tableData } = useContext(Context);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState<Data[]>([]);

  useEffect(() => {
    setRows([]);
    if (Array.isArray(tableData)) {
      console.log(tableData);
      tableData.forEach((e) => {
        setRows((row) => [
          ...row,
          createData(e.date, e.cases, e.recovered, e.deaths),
        ]);
      });
    } else {
      let newTableData: any = tableData;
      var today = new Date().toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      setRows((row) => [
        ...row,
        createData(
          today,
          newTableData.cases,
          newTableData.recovered,
          newTableData.deaths
        ),
      ]);
    }
  }, [tableData]);

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
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={"center"}
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
              .map((row, i) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={"center"}>
                          {column.format && typeof value === "number"
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
