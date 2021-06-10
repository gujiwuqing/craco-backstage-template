import React from "react";
import { renderRoutes } from "react-router-config";
import routes from "../route";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.less";
import BaseHeader from "./BaseHeader";
const Layout = () => {
  return (
    <React.Suspense fallback>
      <Router>
        <BaseHeader />
        <div>{renderRoutes(routes)}</div>
      </Router>
    </React.Suspense>
  );
};

export default Layout;
