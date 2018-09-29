import React, { Component } from "react";
import axios from "axios";

import Highcharts from "highcharts/highstock";
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip
} from "react-jsx-highstock";

class CryptoChart extends Component {
  constructor(props) {
    super(props);

    const now = Date.now();
    this.state = {
      data1: this.createRandomData(now, 1e8, 200)
    };
  }

  componentDidMount() {
    this.getCryptoHistoryData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.coinSymbol !== this.props.coinSymbol) {
      this.getCryptoHistoryData(this.props.coinSymbol.toUpperCase());
    }
  }

  createDataPoint = (time = Date.now(), magnitude = 1000, offset = 0) => {
    return [
      time + offset * magnitude,
      Math.round(Math.random() * 100 * 2) / 2 + 6000
    ];
  };

  createRandomData = (time, magnitude, points = 100) => {
    const data = [];
    let i = points * -1 + 1;
    for (i; i <= 0; i++) {
      data.push(this.createDataPoint(time, magnitude, i));
    }
    return data;
  };

  getCryptoHistoryData = async (coinSymbol = "BTC") => {
    const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coinSymbol}&tsym=USD&limit=2000&aggregate=1&e=CCCAGG`;
    let response = await axios.get(url);
    const { Data } = response.data;
    let data = [];

    Data.forEach(day => {
      // The api returns an object with empty values for each time even if a coin
      // didn't exist at the time, so we filter out values of 0 price
      if (day.open !== 0) {
        // convert date format as it is returned as (YYYYMMDD) and we need (YYYYMMDDHHMMSS)
        data.push([day.time * 1000, day.open]);
      }
    });
    this.setState({ data });
  };

  render() {
    return (
      <section className="cryptochart">
        <h1 className="cryptochart__title">
          {this.props.coinName} <span>({this.props.coinSymbol})</span>
        </h1>
        <HighchartsStockChart>
          <Chart
            onClick={this.handleClick}
            zoomType="x"
            backgroundColor={"#20273e"}
          />

          {/* <Title>Bitcoin</Title> */}

          {/* <Legend>
            <Legend.Title>Key</Legend.Title>
          </Legend> */}

          <RangeSelector>
            <RangeSelector.Button count={1} type="day">
              1d
            </RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">
              7d
            </RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">
              1m
            </RangeSelector.Button>
            <RangeSelector.Button count={1} type="year">
              1y
            </RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            {/* <RangeSelector.Input boxBorderColor="#7cb5ec" /> */}
          </RangeSelector>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis opposite>
            <YAxis.Title>Price (USD)</YAxis.Title>
            {/* <SplineSeries id="twitter" name="Twitter mentions" data={data2} /> */}
            <SplineSeries
              id="bitcoin"
              name={this.props.coinName + " price"}
              // data={[[1, 12], [2, 34], [3, 95], [4, 92], [5, 12], [6, 34]]}
              data={this.state.data}
            />
          </YAxis>

          <Navigator>
            <Navigator.Series seriesId="profit" />
            <Navigator.Series seriesId="bitcoin" />
          </Navigator>
        </HighchartsStockChart>
      </section>
    );
  }
}

export default withHighcharts(CryptoChart, Highcharts);
