import React from "react";
import Home from '@/pages/home'
import BasicTable from '@/pages/table/basic-table'
import DragTable from '@/pages/table/drag-table'
import RichText from '@/pages/editor/rich-text'
import Login from '@/pages/login'
import BasicLayout from '@/layout/BasicLayout'

const routes = [
    {
        path: "/craco-backstage-template/login",
        component: Login,
        title: '登录',
        exact: true,
        layout: false,
    },
    {
        path: "/craco-backstage-template",
        component: BasicLayout,
        title: '首页',
        layout: true,
        routes: [
            {
                path: "/craco-backstage-template",
                component: Home,
                title: '首页',
                exact: true
            },
            {
                path: "/craco-backstage-template/table/basic-table",
                component: BasicTable,
                title: '基础表格',
                exact: true
            },
            {
                path: "/craco-backstage-template/table/drag-table",
                component: DragTable,
                title: '可拖拽表格',
                exact: true
            },
            {
                path: "/craco-backstage-template/editor/rich-text",
                component: RichText,
                title: '富文本编辑器',
                exact: true
            },
        ]
    },


];

export default routes
