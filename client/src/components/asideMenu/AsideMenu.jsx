import React from "react";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "./asidemenu.scss";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

function AsideMenu() {
   return (
      <Sider  >
         <Menu mode="inline" className="aside-container" >
            <Menu.Item key="1">
               <NavLink to="/">New Game</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
               <NavLink to="/game">Game</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
               <NavLink to="/settings">Settings</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
               <NavLink to="/rules">Rules</NavLink>
            </Menu.Item>
         </Menu>
      </Sider>
   );
}

export default AsideMenu;
