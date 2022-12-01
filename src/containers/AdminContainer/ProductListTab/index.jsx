import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../action';


const ProductListTab = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const res = useSelector(state => state.fetchProduct.products.map((item) => {
        return {
            ...item,
            key: item.id
        }
    }
    ))
    const brands = [{
        text: "Nike",
        value: "Nike",
        key: 'nike'
    }, {
        text: "Adidas",
        value: "Adidas",
        key: 'adidas'
    }
    ]


    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            ...getColumnSearchProps('name'),
            width: 280
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            filters: [
                ...brands
            ],
            onFilter: (value, record) => record.brand.indexOf(value) === 0
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            render: (_) => (
                <>
                    <Button type='link'>Edit</Button>
                    <Button type='link'>Delete</Button>
                </>
            )
        }
    ];
    const onChange = (pagination, filters, sorter, extra) => {

    };
    return (
        <Table columns={columns} dataSource={res} onChange={onChange} rowSelection pagination={{
            pageSize: 9,
            simple: true,
        }} />
    );
}

export default ProductListTab;