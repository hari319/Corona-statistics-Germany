/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, FunctionComponent } from "react";

interface SelectedState {
  name: string;
  code: string;
}
interface TableData {
  cases: number;
  recovered: number;
  deaths: number;
  date: Date;
}

export const Context = createContext<{
  setSelectedState: (value: SelectedState) => void;
  setWeeks: (value: string | number) => void;
  setTableData: (value: TableData[]) => void;
  selectedState: any;
  weeks: string | number;
  tableData: TableData[];
}>({
  setSelectedState: () => {},
  setWeeks: () => {},
  setTableData: () => {},
  selectedState: {
    name: "",
    code: "",
  },
  weeks: "",
  tableData: [],
});

const ContextProvider: FunctionComponent<any> = ({ children }) => {
  return <Context.Provider value={Auth()}>{children}</Context.Provider>;
};

const Auth = () => {
  const [selectedState, setSelectedState] = useState<SelectedState>();
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [weeks, setWeeks] = useState<any>();

  return {
    selectedState,
    weeks,
    tableData,
    setSelectedState,
    setWeeks,
    setTableData,
  };
};

export default ContextProvider;
