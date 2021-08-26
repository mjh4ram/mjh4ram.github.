import React,  { useEffect } from "react";
import Chart from "./Chart"
import "../../css/charts.css";
import { observer } from 'mobx-react-lite';


const ChartSec = observer(() => {
  return (
    <div class="chart-section">
      <Chart chartname="BTC inflows to exchanges" chartdescription="Inflows to exchanges fluctuate with changes in market sentiment. For instance, an increase in inflows suggests increased selling pressure in the market." charttitle="BTC inflows to exchanges" type="inflow"/>
      <Chart chartname="Change in BTC held on exchanges" chartdescription="Assets held on exchanges increase if more market participants want to sell than to buy, and if buyers choose to store their assets on exchanges." charttitle="Change in BTC held on exchanges" type="balance"/>
    </div>
  );
});



export default ChartSec;
