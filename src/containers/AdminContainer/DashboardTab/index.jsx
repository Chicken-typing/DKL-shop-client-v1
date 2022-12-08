import React from 'react'
import ColumnChart from '../../../components/chart/ColumnChart';
import AreaChart from '../../../components/chart/AreaChart';
import { Divider, Space } from 'antd';
import PieChart from '../../../components/chart/PieChart';
import CardWrapper from '../../CardWrapper';

const DasboardTab = () => {
  return (
    <Space className='Dashboard'
      direction='vertical'
      split={<Divider type="horizontal" style={{
        borderColor: "black"
      }} />}
      size={50}
      style={{
        width: "100%"
      }}
    >
      <CardWrapper title="Daily Revenue">
        <AreaChart />
      </CardWrapper>
      <CardWrapper title="Daily Orders">
        <ColumnChart />
      </CardWrapper>
      <CardWrapper title="Proportion Category">
        <PieChart />
      </CardWrapper>


    </Space>
  )
};
export default DasboardTab
