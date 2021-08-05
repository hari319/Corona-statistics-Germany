/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, FunctionComponent } from 'react';

export interface SelectedState {
  name: string;
  code: string;
}
export interface StateData {
  cases: number;
  recovered: number;
  deaths: number;
  date: Date;
  state: string;
}

export interface DistrictsData {
  cases: number;
  recovered: number;
  deaths: number;
  date: Date;
  districts: string;
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
  setStateData: (value: StateData[]) => void;
  setDistrictsData: (value: DistrictsData[]) => void;
  selectedState: SelectedState;
  weeks: string;
  stateData: StateData[];
  districtsData: DistrictsData[];
  data: Data[];
}>({
  setSelectedState: () => {},
  setData: () => {},
  setWeeks: () => {},
  setStateData: () => {},
  setDistrictsData: () => {},
  selectedState: {
    name: '',
    code: '',
  },
  weeks: '',
  data: [],
  stateData: [],
  districtsData: [],
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
  const [stateData, setStateData] = useState<StateData[]>([]);
  const [districtsData, setDistrictsData] = useState<DistrictsData[]>([]);
  const [weeks, setWeeks] = useState<string>('');

  return {
    selectedState,
    weeks,
    stateData,
    data,
    districtsData,
    setSelectedState,
    setData,
    setWeeks,
    setStateData,
    setDistrictsData,
  };
};

export default ContextProvider;
