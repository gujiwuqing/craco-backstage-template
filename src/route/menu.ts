export interface routeItem {
  path: string;
  title: string;
  name: string;
  routes?: routeItem[];
}

const routes: routeItem[] = [
  {
    path: "/craco-backstage-template",
    title: "首页",
    name:'home'
  },
  {
    path: "/craco-backstage-template/table",
    title: "表格",
    name:'table',
    routes: [
      {
        path: "/craco-backstage-template/table/basic-table",
        title: "基础表格",
        name:'basic-table'
      },
      {
        path: "/craco-backstage-template/table/drag-table",
        title: "可拖拽表格",
        name:'drag-table'
      },
    ],
  },
  {
    path: "/craco-backstage-template/editor",
    title: "编辑器",
    name:'editor',
    routes: [
      {
        path: "/craco-backstage-template/editor/rich-text",
        title: "富文本编辑器",
        name:'rich-text'
      },
    ],
  },
];

export default routes;
