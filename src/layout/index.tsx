import React from "react";
import { renderRoutes } from "react-router-config";
import routes from "../route";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.less";
import BaseHeader from "./BaseHeader";
import BaseMenu from "./BaseMenu";
import  './index.less'

const Layout = () => {
  return (
    <React.Suspense fallback>
      <Router>
        <div className='container'>
          <BaseMenu />
          <div className='content'>
            <BaseHeader />
            {renderRoutes(routes)}
          </div>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default Layout;
