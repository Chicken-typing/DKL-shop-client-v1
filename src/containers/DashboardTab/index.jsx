import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/plots';
import { useSelector } from 'react-redux';
const DasboardTab = () => {

  const data = useSelector(state => state.fetch.data)
  const config = {
    data,
    xField: 'date',
    yField: 'revenue',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      date: {
        alias: 'Date',
      },
      revenue: {
        alias: 'Revenue',
      },
    },
  };
  return data ? <Column {...config} /> : ""
};
export default DasboardTab
