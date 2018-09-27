import React, { Component } from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  Legend,
  PieSeries,
  Tooltip
} from "react-jsx-highcharts";

class TransactionPieChart extends Component {
  render() {
    const pieData = [
      {
        name: "Bitcoin",
        y: 23
      },
      {
        name: "Litecoin",
        y: 7
      },
      {
        name: "Etherium",
        y: 11
      }
    ];

    const pieColors = ["#2D3F8F", "#617ae2", "#42475f"];

    return (
      <HighchartsChart>
        <Chart backgroundColor={"#20273e"} />
        <Tooltip style={{ fontSize: "18px !important" }} />
        <PieSeries
          name="Total consumption"
          data={pieData}
          size={240}
          showInLegend={true}
          dataLabels={{ enabled: false }}
          innerSize="50%"
          borderColor={"#20273e"}
          colors={pieColors}
        />
        <Legend alignColumns={false} />
      </HighchartsChart>
    );
  }
}

export default withHighcharts(TransactionPieChart, Highcharts);
