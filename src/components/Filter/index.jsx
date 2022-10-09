import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import 'antd/dist/antd.less';
import { Dropdown, Menu, Space } from "antd";
import { Data } from "../../Data/Data";
import { Select } from "antd";
const { Option } = Select;

function Filter({onClick}) {
  const [sorted, setSorted] = useState('Normal');

  // const menu = (
  //     <Menu
  //       items={[
  //         {
  //           label: <button  onClick={onClick}>Price: High-Low</button>,
  //           key: '0',

  //         },
  //         {
  //           label: <a href="">Price: Low-High</a>,
  //           key: '1',
  //         },
  //         {
  //           label: <a href="">Man</a>,
  //           key: '2',
  //         },
  //         {
  //             label: <a href="">Woman</a>,
  //             key: '3',
  //         },
  //       ]}
  //     />
  //   );
  const handleSelect = (value) => {
      setSorted(value)
  }

  return (
    <div className="mt-[40px]">
      <Select
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
      </Select>
    </div>
  );
}

export default Filter;
