/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, FunctionComponent } from 'react';

interface SelectedState {
  name: string;
  code: string;
}
export interface TableData {
  cases: number;
  recovered: number;
  deaths: number;
  date: Date;
  state: string;
}

export interface Data {
  type: string;
  number: number;
  difference: number;
  lastUpdate: Date;
}

export const Context = createContext<{
  setSelectedState: (value: SelectedState) => void;
  setWeeks: (value: string) => void;
  setData: (value: Data[]) => void;
  setTableData: (value: TableData[]) => void;
  selectedState: SelectedState;
  weeks: string;
  tableData: TableData[];
  data: Data[];
}>({
  setSelectedState: () => {},
  setData: () => {},
  setWeeks: () => {},
  setTableData: () => {},
  selectedState: {
    name: '',
    code: '',
  },
  weeks: '',
  data: [],
  tableData: [],
});

const ContextProvider: FunctionComponent<any> = ({ children }) => {
  return <Context.Provider value={Auth()}>{children}</Context.Provider>;
};

const Auth = () => {
  const [data, setData] = useState<Data[]>([]);
  const [selectedState, setSelectedState] = useState<SelectedState>({
    name: '',
    code: '',
  });
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [weeks, setWeeks] = useState<string>('');

  return {
    selectedState,
    weeks,
    tableData,
    data,
    setSelectedState,
    setData,
    setWeeks,
    setTableData,
  };
};

export default ContextProvider;
