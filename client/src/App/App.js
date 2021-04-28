import React from "react";
import "antd/dist/antd.css";
import "./app.scss";

import { BrowserRouter } from "react-router-dom";

import HeaderComponent from "../components/header/HeaderComponent";

import FooterComponent from "../components/footer/FooterComponent";

import { Layout } from "antd";

import AsideMenu from "../components/asideMenu/AsideMenu";
import ContentComponent from "../components/content/ContentComponent";

function App() {
   return (
      <BrowserRouter>
         <Layout style={{ height: "100vh" }}>
            <HeaderComponent />
            <Layout>
               <AsideMenu />
               <Layout>
                  <div className="content-container">
                     <ContentComponent />
                  </div>

                  <FooterComponent />
               </Layout>
            </Layout>
         </Layout>
      </BrowserRouter>
   );
}

export default App;
