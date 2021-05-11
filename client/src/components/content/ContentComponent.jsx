import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Rules from '../../views/Rules/Rules';
import SettingsGame from '../../views/SettingsGame/SettingsGame';
import NewGame from '../../views/NewGame/NewGame';
import Newg from '../../views/NewGame/Newg';
import Game from '../../views/Game/Game';
import './content.scss';

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content className="main-content">
      <div className="main-content-wrapper">
        <Route path="/" component={NewGame} exact />
        <Route path="/newg" component={Newg} exact />
        <Route path="/game" component={Game} exact />
        <Route path="/settings" component={SettingsGame} exact />
        <Route path="/rules" component={Rules} exact />
      </div>
    </Content>
  );
}

export default ContentComponent;
