import React, { useRef, useEffect, useState } from "react";
import { createChart } from 'lightweight-charts';
import axiosInstance from "../../classes/axiosApi";
import UserStore from "../../classes/userstore";
import { observer } from 'mobx-react-lite';

const Chart = observer((props) => {
  const getData = async(areaSeries) => {
      try {
        var lastdate = 1;
        if (sessionStorage.getItem("lastdate_" + props.type) && sessionStorage.getItem("lastdate_" + props.type) != "undefined") {
          lastdate = sessionStorage.getItem("lastdate_" + props.type);
        }
        var data = await axiosInstance.get('/' + props.type + '/?date=' + lastdate, {
          headers: {
              'Authorization': "Token " + sessionStorage.getItem('token'),
              'Content-Type': 'application/json',
              'accept': 'application/json'
          }
        });

        var prev_data = JSON.parse(sessionStorage.getItem(props.type));
        var combined = {...prev_data, ...data.data};
        var keys = Object.keys(combined);
        var last = keys[keys.length - 1];
        sessionStorage.setItem(props.type, JSON.stringify(combined));
        sessionStorage.setItem("lastdate_" + props.type, combined[last].date_time);
        // setData(Object.values(combined));
        var data = [];
        var list = Object.entries(combined);
        for (const json_data of list) {
          let parsed = Object.entries(json_data[1]);
          data.push({ time : convert(parsed[0][1]), value : parsed[1][1] });
        }
        areaSeries.setData(data);
      } catch (error) {
          throw error;
      }
  }



  function convert(date_string) {
    var date = new Date(date_string);
    return date.getFullYear() + '-'  + (date.getMonth() + 1) + '-' + date.getDate();
  }


  const chartRef = useRef();
  useEffect(() => {
    // 1. create chart
    var chart = createChart(chartRef.current, {
      width: 450,
      height: 250,
      layout: {
        backgroundColor: '#181c24',
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          color: 'rgba(42, 46, 57, 0.5)',
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
      },
    });

    var areaSeries = chart.addAreaSeries({
      topColor: 'rgb(255,255,255)',
      bottomColor: '#bfbbbb',
      lineColor: 'rgb(255,255,255)',
      lineWidth: 2,
    });

    // 2. create chart
    getData(areaSeries);
    // props.data.foreach(element => data.push({ time: convert(element.date_time), value: 1}));

    // areaSeries.setData(data);

    chart.timeScale().fitContent();
  }, []);


  return (
    <div class="chart">
      <div class="chart-name">{props.chartname}<svg class="info" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"/></svg></div>
      <div class="chart-description">{props.chartdescription}</div>
      <div class="viewcharts-buffer"><button class="learn-more">Learn More</button></div>
      <div class="chart-title">{props.charttitle}</div>
      <div class="chart-container" ref={chartRef}>
          {
            UserStore.isLoggedIn ? (
              <div></div>
            ) : (
              <div class="bg"><div class="blur"><button>Sign In</button></div></div>
            )
          }
      </div>
    </div>
  );

});


export default Chart;
