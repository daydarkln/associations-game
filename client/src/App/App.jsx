import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';
import AsideMenu from '../components/asideMenu/AsideMenu';
import ContentComponent from '../components/content/ContentComponent';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderComponent />
        <Layout>
          <AsideMenu />
          <div className="content-container">
            <ContentComponent />
          </div>
        </Layout>
        <FooterComponent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
