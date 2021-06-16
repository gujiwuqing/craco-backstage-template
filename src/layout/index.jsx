import React from "react";
import { renderRoutes } from "react-router-config";
import routes from "../route";
import { BrowserRouter as Router } from "react-router-dom";

import BaseHeader from "./BaseHeader";
import BaseMenu from "./BaseMenu";
import "./index.less";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { hot } from "react-hot-loader";
import { Card } from "antd";

const Layout = () => {
  return (
    <React.Suspense fallback>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="container">
            <BaseMenu />
            <div className="content">
              <BaseHeader />
              <Card> {renderRoutes(routes)}</Card>
            </div>
          </div>
        </Router>
      </I18nextProvider>
    </React.Suspense>
  );
};

export default hot(module)(Layout);
