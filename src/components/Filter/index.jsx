import React from 'react'
import { DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Dropdown, Menu, Space } from 'antd';

function Filter() {
    const menu = (
        <Menu
          items={[
            {
              label: <a href="">Price: High-Low</a>,
              key: '0',
            },
            {
              label: <a href="">Price: Low-High</a>,
              key: '1',
            },
            {
              label: <a href="">Man</a>,
              key: '2',
            },
            {
                label: <a href="">Woman</a>,
                key: '3',
            },
          ]}
        />
      );
  return (
    <div className='mt-[40px]'>
         <Dropdown  overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
        <Space>
        <h2 className='mt-[10px] text-lg font-medium font-Helvetical'>Filter</h2>
        <DownOutlined style={{color: 'black'}}/>
        </Space>
        </a>
        </Dropdown>
    </div>
  )
}

export default Filter