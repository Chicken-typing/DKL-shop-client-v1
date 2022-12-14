import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Avatar } from "antd";
import Tab from "../../components/Tab";
import { SearchOutlined } from "@ant-design/icons";
import { fetchProduct } from "../../action";
import { useRef } from "react";
import { Button, Tooltip, Modal, Form, Input } from "antd";
import { createStyles } from "@mantine/core";

import "./style.scss";

function ListNavigations() {
  const data = useSelector((state) => state.Cart.carts);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const wrapperRef = useRef(null);
  const [scrollNav, setScrollNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cursor, setCursor] = useState(-1);
  let navigate = useNavigate();
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        if (lastScrollY >= 130) {
          setScrollNav(true);
        }
      } else {
        // if scroll up show the navbar
        setShow(false);
        setKeyword("");
        if (window.scrollY > 45) {
          setScroll(true);
        } else {
          setScroll(false);
        }
        setScrollNav(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // This state is used to hide and show search box when click icon
  const handleShow = () => {
    if (!show) {
      setShow(true);
      setKeyword("");
    } else {
      setShow(false);
      setKeyword("");
    }
  };

  // This function to hide the search box when change the orther tab
  useEffect(() => {
    setShow(false);
    setKeyword("");
  }, [pathname]);

  // This function to hide the search box when click any where on the screen
  useEffect(() => {
    function handleClickOutside(event) {
      if (keyword === "") {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShow(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handle = (e) => {
    // This function to set value onChange and when search can not find product will show message.
    setKeyword(e.target.value);
    setSearchResult(
      res
        .filter((item) => {
          const searchTerm = keyword.toLowerCase();
          const fullName = item.name.toLowerCase();

          return (
            searchTerm &&
            fullName.startsWith(searchTerm) &&
            fullName !== searchTerm
          );
        })
        .slice(0, 10)
    );
  };
  // Use this function to press Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setKeyword(event.target.value);
      event.target.value = "";
    }
    if (event.key === "ArrowDown") {
      show
        ? setCursor((C) => (C < searchResult.length - 1 ? C + 1 : C))
        : setShow(true);
    }
    if (event.key === "ArrowUp") {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }
    if (event.key === "Escape") {
      setShow(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const res = useSelector((state) => state.fetchProduct.products);
  const handleOk = () => {
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };

  return (
    <Disclosure
      as="nav"
      className={`scroll bg-black max-w-[100%] ${scrollNav && "hidden"} `}
      style={{ top: scroll ? "0" : "", position: scroll ? "fixed" : "" }}
    >
      {({ open }) => (
        <>
          <div className=" px-3 sm:px-6 lg:px-7">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center nmd:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-center sm:items-stretch sm:justify-start max-w-[100%] ">
                <div className="sm:ml-6 sm:block max-w-[100%] ">
                  <div className="flex  m-sm:invisible max-w-[100%]">
                    <Tab label="Home" url="/home" />
                    <Tab label="Woman" url="/woman" />
                    <Tab label="Man" url="/man" />
                    <Tab label="Kid" url="/kid" />
                    <Tab label="Brand" url="/brand" />
                    <li className="search-engine m-sm:hidden">
                      <Tooltip title="search">
                        <Button
                          id="search-icon"
                          shape="circle"
                          icon={<SearchOutlined />}
                          size="large"
                          onClick={handleShow}
                          style={{ top: "-5px" }}
                        />
                      </Tooltip>
                    </li>
                    <Modal
                          title="Search Box"
                          width={400}
                          open={show}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                            <Input
                              value={keyword}
                              onFocus={() => setKeyword("")}
                              onChange={handle}
                              placeholder='product you want to find'
                              style={{ paddingLeft: 10 }}
                              type="text"
                            />
                            <div
                              className="dropdown"
                              style={{
                                display: keyword.length > 0 ? "block" : "none",
                                visibility: show ? "visible" : "hidden",
                              }}
                            >
                              {searchResult.length > 0
                                ? searchResult.map((item) => (
                                    <div
                                      onSelect={item}
                                      onClick={() =>
                                        navigate(`/products/${item.name}`)
                                      }
                                      className={
                                        show ? "dropdown-row" : "dropdown_close"
                                      }
                                      style={{
                                        visibility: show ? "visible" : "hidden",
                                      }}
                                      key={item._id}
                                    >
                                      <img
                                        src={item.defaultImage.thumbUrl}
                                        alt=""
                                      />

                                      <div className=" item_name z-[10]">
                                        {item.name}
                                      </div>
                                    </div>
                                  ))
                                : "Can not find this product"}
                            </div>
                        </Modal>
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-end ">
                                 
            </div> */}
              <Link className="absolute float-end right-0" to="/cart">
                <Badge count={data.length} size='small'>
                  <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV1JREFUSEvtluFRwzAMhfWUAYAJKBNQJqDdoCPABLABjFAmoBvABrQbwAZlgzKA/Tj1DOcmTeL4cpfjiH4lZ1uf9CydBRnIMBBXOoNJnorIpYhMRcS+1wA2XRPoBCa5IPkcgDFrB+AWwGtqAMlg59wjgIcmxwG+SoEngUnOSL4Fh18A7k3i8G9rSxE5sX8AcwA/a7UxJIG99+boWkQMOgWwjT2SnJB8D/C1qs7bsk4F0xyRfCqKwrKtmHNuCeAuZH0GYNd4LW2RxTI3yRgK7yVV7taMO4B/6yDlng/A1qOhiKxH+7Stql7EDsvguHr7BFeqPQX8SXLfmwBuROS8JqLGfWX5U8AbVZ0ZLGqrY+zGfX8K3Mtd52Q8grMUGKVO6eMsacuHRqn/hdRXAGw82ltlEPDe2zxV9wLlFtqHqh688RVwGNgX3vtJLiU+p6o2e63KM1jr6NMH/JiPwcDftpYILoVzxCEAAAAASUVORK5CYII=" />
                </Badge>
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="nmd:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 relative">
              <Tab label="Home" url="/home" />
              <Tab label="Woman" url="/woman" />
              -=
              <Tab label="Man" url="/man" />
              <Tab label="Kid" url="/kid" />
              <Tab label="Brand" url="/brand" />
              <li className="search-engine">
                <Tooltip title="search">
                  <Button
                    id="search-icon"
                    shape="circle"
                    icon={<SearchOutlined />}
                    size="large"
                    onClick={handleShow}
                    style={{ top: "-5px" }}
                  />
                </Tooltip>
              </li>
              <Modal
                          title="Basic Modal"
                          width={400}
                          open={show}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                            <Input
                              value={keyword}
                              onFocus={() => setKeyword("")}
                              onChange={handle}
                              style={{ paddingLeft: 10 }}
                              type="text"
                            />
                            <div
                              className="dropdown"
                              style={{
                                display: keyword.length > 0 ? "block" : "none",
                                visibility: show ? "visible" : "hidden",
                              }}
                            >
                              {searchResult.length > 0
                                ? searchResult.map((item) => (
                                    <div
                                      onSelect={item}
                                      onClick={() =>
                                        navigate(`/products/${item.name}`)
                                      }
                                      className={
                                        show ? "dropdown-row" : "dropdown_close"
                                      }
                                      style={{
                                        visibility: show ? "visible" : "hidden",
                                      }}
                                      key={item._id}
                                    >
                                      <img
                                        src={item.defaultImage.thumbUrl}
                                        alt=""
                                      />

                                      <div className=" item_name z-[10]">
                                        {item.name}
                                      </div>
                                    </div>
                                  ))
                                : "Can not find this product"}
                            </div>
                        </Modal>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ListNavigations;
