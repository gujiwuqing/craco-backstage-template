import React from "react";

const Home = React.lazy(() => import('@/pages/home'))
const Test = React.lazy(() => import('@/pages/test'))
const BasicTable = React.lazy(() => import('@/pages/table/basic-table'))
const DragTable = React.lazy(() => import('@/pages/table/drag-table'))
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
    },
    {
        exact: true,
        path: "/craco-backstage-template/table/basic-table",
        component: BasicTable,
    }, {
        exact: true,
        path: "/craco-backstage-template/table/drag-table",
        component: DragTable,
    }

];

export default routes
