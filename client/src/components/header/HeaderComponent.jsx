import React from "react";

import "antd/dist/antd.css";

import {  Menu , Layout} from "antd";
const { Header } = Layout;



function HeaderComponent() {
   return (
      <Header className="main-header">
         <div className="logo" />
         <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1">Register</Menu.Item>
            <Menu.Item key="2">Login</Menu.Item>
         </Menu>
      </Header>
   );
}

export default HeaderComponent;
