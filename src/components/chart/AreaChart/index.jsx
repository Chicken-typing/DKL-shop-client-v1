import React, { useEffect } from 'react';
import { Area } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatic } from '../../../action';
import { API_ADMIN_ACCESS } from '../../../linkTo';

const AreaChart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatic({
            url: API_ADMIN_ACCESS
        }));
    }, []);
    const data = useSelector(state => state.fetchStatic.dataAccession)
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return <Area {...config} />;
};
export default AreaChart
