import React, { Component } from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  ColumnSeries,
  SplineSeries,
  PieSeries,
  Tooltip
} from "react-jsx-highcharts";

class TransactionPieChart extends Component {
  render() {
    const pieData = [
      {
        name: "Jane",
        y: 13
      },
      {
        name: "John",
        y: 23
      },
      {
        name: "Joe",
        y: 19
      }
    ];

    const pieColors = ["#2D3F8F", "#42475f", "#617ae2"];

    return (
      <HighchartsChart>
        <Chart backgroundColor={"#20273e"} />
        <Tooltip style={{ fontSize: "18px !important" }} />
        <PieSeries
          name="Total consumption"
          data={pieData}
          size={230}
          showInLegend={true}
          dataLabels={{ enabled: false }}
          innerSize="40%"
          borderColor={"#20273e"}
          colors={pieColors}
        />
        <Legend alignColumns={false} />
      </HighchartsChart>
    );
  }
}

export default withHighcharts(TransactionPieChart, Highcharts);
