/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, FunctionComponent } from 'react';

export interface SelectedCountryValue {
  name: string;
  code: string;
  group: string;
}
export interface CountryData {
  cases: number;
  recovered: number;
  deaths: number;
  date: Date;
  name: string;
}

export interface Data {
  type: string;
  number: number;
  difference: number;
  lastUpdate: Date;
}

export const Context = createContext<{
  setSelectedState: (value: SelectedCountryValue) => void;
  setWeeks: (value: string) => void;
  setData: (value: Data[]) => void;
  setStateData: (value: CountryData[]) => void;
  setDistrictsData: (value: CountryData[]) => void;
  setRadioValue: (value: string) => void;
  setShowTableChart: (value: boolean) => void;
  selectedState: SelectedCountryValue;
  weeks: string;
  stateData: CountryData[];
  districtsData: CountryData[];
  data: Data[];
  radioValue: string;
  showTableChart: boolean;
}>({
  setSelectedState: () => {},
  setData: () => {},
  setWeeks: () => {},
  setStateData: () => {},
  setDistrictsData: () => {},
  setRadioValue: () => {},
  setShowTableChart: () => {},
  selectedState: {
    name: '',
    code: '',
    group: '',
  },
  weeks: '',
  data: [],
  stateData: [],
  districtsData: [],
  radioValue: '',
  showTableChart: false,
});

const ContextProvider: FunctionComponent<any> = ({ children }) => {
  return <Context.Provider value={Auth()}>{children}</Context.Provider>;
};

const Auth = () => {
  const [data, setData] = useState<Data[]>([]);
  const [selectedState, setSelectedState] = useState<SelectedCountryValue>({
    name: '',
    code: '',
    group: '',
  });
  const [stateData, setStateData] = useState<CountryData[]>([]);
  const [districtsData, setDistrictsData] = useState<CountryData[]>([]);
  const [weeks, setWeeks] = useState<string>('');
  const [radioValue, setRadioValue] = useState<string>('');
  const [showTableChart, setShowTableChart] = useState<boolean>(false);

  return {
    selectedState,
    weeks,
    stateData,
    data,
    districtsData,
    radioValue,
    showTableChart,
    setSelectedState,
    setData,
    setWeeks,
    setStateData,
    setDistrictsData,
    setRadioValue,
    setShowTableChart,
  };
};

export default ContextProvider;
