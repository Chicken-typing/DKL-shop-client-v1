import { Select } from 'antd';
import React from 'react';
import './style.scss'
const { Option } = Select;

const handleChange = (value) => {
}

const SelectTag = (props) => {
    const { listTags } = props
    return (
        <Select
            mode="multiple"
            style={{
                width: '100%',
            }}
            placeholder="Type of shoe"
            onChange={handleChange}
            optionLabelProp="label"
        >
            {
                listTags.map(listTag => {
                    return (
                        <Option value={listTag.value} label={listTag.label}>
                            <div className="demo-option-label-item">
                                <span role="img" aria-label={listTag.label}>  
                                </span>
                                {listTag.label}
                            </div>
                        </Option>

                    )
                })
            }
        </Select>
    )
}

export default SelectTag;
