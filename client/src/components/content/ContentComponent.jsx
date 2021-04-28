import React from "react";
import CurrentGame from "../../views/CurrentGame/CurrentGame";
import MainPage from "../../views/MainPage/MainPage";
import NewGame from "../../views/NewGame/NewGame";
import Rules from "../../views/Rules/Rules";
import SettingsGame from "../../views/SettingsGame/SettingsGame";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";
import "./content.scss";
import { Layout } from "antd";

const { Content } = Layout;

function ContentComponent() {
   return (
      <Content className="main-content">
         <div className="main-content-wrapper">
            <Route path="/" component={MainPage} exact />
            <Route path="/current" component={CurrentGame} exact />
            <Route path="/new" component={NewGame} exact />
            <Route path="/settings" component={SettingsGame} exact />
            <Route path="/rules" component={Rules} exact />
         </div>
      </Content>
   );
}

export default ContentComponent;
