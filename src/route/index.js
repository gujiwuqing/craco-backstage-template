import React from "react";

const Home = React.lazy(() => import('@/pages/home'))
const Test = React.lazy(() => import('@/pages/test'))
const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        exact: true,
        path: "/test",
        component: Test,
    }
];

export default routes
