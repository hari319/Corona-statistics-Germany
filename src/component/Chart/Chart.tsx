import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context, TableData } from "../Context";
import "./Chart.css";

const Chart = () => {
  const { selectedState, tableData } = useContext(Context);
  const [Cases, setCases] = useState<number[]>([]);
  const [Label, setLabel] = useState<string | Date[]>([]);
  const [Deaths, setDeaths] = useState<number[]>([]);
  const [Recovered, setRecovered] = useState<number[]>([]);
  const value: number = 7;

  useEffect(() => {
    tableData &&
      tableData.forEach((e: TableData) => {
        setLabel((label: any) => [
          ...label,
          selectedState.code === "all" ? e.state : e.date,
        ]);
        setCases((cases: number[]) => [...cases, e.cases]);
        setDeaths((deaths: number[]) => [...deaths, e.deaths]);
        setRecovered((recovered: number[]) => [...recovered, e.recovered]);
      });
  }, [tableData, selectedState]);

  const ChartData = {
    labels: Label.slice(-value),

    type: "polarArea",
    datasets: [
      {
        data: Cases.slice(-value),
        backgroundColor: "#ff3333",
        label: "Cases",
      },

      {
        data: Recovered.slice(-value),
        backgroundColor: "#008000",
        label: "Recovered",
      },

      {
        data: Deaths.slice(-value),
        backgroundColor: "#000000",
        label: "Deaths",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    datetainAspectRatio: false,
  };

  return tableData && tableData.length > 0 ? (
    <div className={"Chart"}>
      <h1>Chart Projection </h1>
      <Bar data={ChartData} options={chartOptions}></Bar>
    </div>
  ) : (
    <></>
  );
};

export default Chart;
