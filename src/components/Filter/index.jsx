import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Dropdown, Menu, Space } from "antd";
import { Data } from "../../Data/Data";
import { Select } from "antd";
const { Option } = Select;

function Filter({filterHighLow, filterLowHigh, filterNike, filterAdidas}) {


  const menu = (
      <Menu
        items={[
          {
            label:  <button onClick={filterHighLow}>Price: High-Low</button>,
            key: '0',

          },
          {
            label: <button onClick={filterLowHigh}>Price: Low-High</button>,
            key: '1',
          },
          {
            label: <button onClick={filterNike}>Nike</button>,
            key: '2',
          },
          {
              label: <button onClick={filterAdidas}>Adidas</button>,
              key: '3',
          },
        ]}
      />
    );


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
       <Dropdown overlay={menu} trigger={['click']} >
        <a onClick={(e) => e.preventDefault()}>
        <Space style={{color: 'black', fontSize: '20px'}} >
        Filter
        <DownOutlined  />
        </Space>
        </a>
       </Dropdown>
    </div>
  );
}

export default Filter;
