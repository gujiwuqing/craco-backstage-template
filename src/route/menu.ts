export interface routeItem {
  path: string;
  title: string;
  routes?: routeItem[];
}

const routes: routeItem[] = [
  {
    path: "/craco-backstage-template",
    title: "首页",
  },
  {
    path: "/craco-backstage-template/table",
    title: "表格",
    routes: [
      {
        path: "/craco-backstage-template/table/basic-table",
        title: "基础表格",
      },
      {
        path: "/craco-backstage-template/table/drag-table",
        title: "可拖拽表格",
      },
    ],
  },
];

export default routes;
