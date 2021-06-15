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
];

export default routes;
