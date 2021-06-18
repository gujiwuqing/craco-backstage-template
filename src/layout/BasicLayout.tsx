import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import BaseHeader from "./BaseHeader";
import BaseMenu from "./BaseMenu";
import "./index.less";
import {Card} from "antd";

const BasicLayout = (props: any) => {
    let {router} = props;

    function renderRoute(router: any): any[] {
        return router.map((m: any) => {
            const {redirect, path, component, exact} = m;

            return (
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    // authority={authority}
                    render={(props) =>
                        redirect ? (
                            <Redirect to={redirect}/>
                        ) : (
                            component && React.createElement(component, props)
                        )
                    }
                />
            );
        });
    }

    return (

        <Router>
            <div className="container">
                <BaseMenu/>
                <div className="content">
                    <BaseHeader/>
                    <Card> {renderRoute(router)}</Card>
                </div>
            </div>
        </Router>
    );
};

export default BasicLayout
