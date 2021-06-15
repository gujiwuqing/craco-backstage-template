import React from "react";

const Home = React.lazy(() => import('@/pages/home'))
const BasicTable = React.lazy(() => import('@/pages/table/basic-table'))
const DragTable = React.lazy(() => import('@/pages/table/drag-table'))
const RichText = React.lazy(() => import('@/pages/editor/rich-text'))
const routes = [
    {
        path: "/craco-backstage-template",
        exact: true,
        component: Home,
        title: '首页'
        // routes: [
        //     {
        //         exact: true,
        //         path: "/craco-backstage-template/test",
        //         component: Test,
        //     }
        // ]
    },
    {
        path: "/craco-backstage-template/table/basic-table",
        component: BasicTable,
        title: '基础表格',
    },
    {
        path: "/craco-backstage-template/table/drag-table",
        component: DragTable,
        title: '可拖拽表格',
    },
    {
        path: "/craco-backstage-template/editor/rich-text",
        component: RichText,
        title: '富文本编辑器',
    },


];

export default routes
