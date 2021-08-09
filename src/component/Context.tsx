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
  selectedState: SelectedCountryValue;
  weeks: string;
  stateData: CountryData[];
  districtsData: CountryData[];
  data: Data[];
  radioValue: string;
}>({
  setSelectedState: () => {},
  setData: () => {},
  setWeeks: () => {},
  setStateData: () => {},
  setDistrictsData: () => {},
  setRadioValue: () => {},
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
  const [radioValue, setRadioValue] = useState<string>('states');

  return {
    selectedState,
    weeks,
    stateData,
    data,
    districtsData,
    radioValue,
    setSelectedState,
    setData,
    setWeeks,
    setStateData,
    setDistrictsData,
    setRadioValue,
  };
};

export default ContextProvider;
