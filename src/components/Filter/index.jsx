import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Dropdown, Menu, Space } from "antd";
import { Select } from "antd";
const { Option } = Select;

function Filter({ filterHighLow, filterLowHigh, filterNike, filterAdidas, all }) {

  const [type, setType] = useState('All')
  const items =
    [
      {
        label: <button onClick={all}>All</button>,
        key: 'All',

      },
      {
        label: <button onClick={filterHighLow}>Price: High-Low</button>,
        key: 'Price: High-Low',
      },
      {
        label: <button onClick={filterLowHigh}>Price: Low-High</button>,
        key: 'Price: Low-High',
      },
      {
        label: <button onClick={filterNike}>Nike</button>,
        key: 'Nike',
      },
      {
        label: <button onClick={filterAdidas}>Adidas</button>,
        key: 'Adidas',
      },
    ]

  return (
    <div className="mt-[40px] ">
      {/* <Select
        defaultValue="Normal"
        onChange={handleSelect}
        style={{
          width: 120,
        }}
      >
        <Option onClick={onClick} value="desc" >High-Low</Option>
        <Option onClick={onClick} value="ascd">Low-High</Option>
        <Option value="woman">Woman</Option>
        <Option value="man">Man</Option>
      </Select> */}
      <Dropdown menu={{ items, onClick: e => setType(e.key), defaultSelectedKeys: [type] }} trigger={['click']}  >
        <a onClick={(e) => e.preventDefault()}>
          <Space style={{ color: 'black', fontSize: '20px' }} >
            {type}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default Filter;
