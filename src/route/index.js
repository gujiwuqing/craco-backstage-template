import React from "react";

const Home = React.lazy(() => import('@/pages/home'))
const Test = React.lazy(() => import('@/pages/test'))
const routes = [
    {
        path: "/craco-backstage-template",
        exact: true,
        component: Home,
        // routes: [
        //     {
        //         exact: true,
        //         path: "/craco-backstage-template/test",
        //         component: Test,
        //     }
        // ]
    },
    {
        exact: true,
        path: "/craco-backstage-template/test",
        component: Test,
    }

];

export default routes
