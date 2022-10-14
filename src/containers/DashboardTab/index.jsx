import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI } from '../../action';
import { API_ADMIN_STATIC } from '../../linkTo';
const DasboardTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAPI({
          url: API_ADMIN_STATIC
      }));
  }, []);
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
    date: {
      type: {
        alias: 'Month',
      },
      revenue: {
        alias: 'Revenue',
      },
    },
  };
  return data? <Column {...config} />:"";
};
export default DasboardTab
