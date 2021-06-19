import routes from "@/route";
import React, {memo} from "react";
import {hot} from "react-hot-loader";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

const Layout = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {routes.map(
                        ({path, routes, exact, layout, component, ...otherProps}) => {
                            if (layout && component) {
                                // 如果是 layout 布局，要单独处理一下，因为还有子组件
                                return (
                                    <Route
                                        key={path}
                                        exact={exact}
                                        path={path}
                                        render={(props) =>
                                            React.createElement(component, {
                                                // 如果是 layout 布局，把渲染组件 routes 当作 router 组件继续渲染
                                                router: routes,
                                                key:path,
                                                ...otherProps,
                                                ...props,
                                            })
                                        }
                                        {...otherProps}
                                    />
                                );
                            } else {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        exact={exact}
                                        render={(props) =>
                                            React.createElement(component, {
                                                // 如果是 layout 布局，把渲染组件 routes 当作 router 组件继续渲染
                                                router: routes,
                                                key:path,
                                                ...otherProps,
                                                ...props,
                                            })
                                        }
                                        {...otherProps}
                                    />
                                );
                            }
                        }
                    )}
                </Switch>

            </div>
        </Router>
    );
};

export default hot(module)(Layout);
