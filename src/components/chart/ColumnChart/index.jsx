import React, { useEffect } from 'react'
import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatic } from '../../../action';
import { API_ADMIN_REVENUE } from '../../../linkTo';
const ColumnChart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatic({
            url: API_ADMIN_REVENUE
        }));
    }, []);
    const dataRevenue = useSelector(state => state.fetchStatic.dataRevenue)
    const configStaticRevenue = {
        data: dataRevenue,
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
    return dataRevenue ? <Column {...configStaticRevenue} /> : ""
}
export default ColumnChart