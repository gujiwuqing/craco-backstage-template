import React from "react";
import Home from '@/pages/home'
import BasicTable from '@/pages/table/basic-table'
import DragTable from '@/pages/table/drag-table'
import RichText from '@/pages/editor/rich-text'
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
