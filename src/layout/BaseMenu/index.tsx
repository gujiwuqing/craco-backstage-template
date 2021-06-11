import useStore from "@/store/index";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseMenu() {
  let history = useHistory();
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const collapsed = useStore((state) => state.collapsed);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        style={{ minHeight: "100vh" }}
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            history.push("/craco-backstage-template");
          }}
        >
          首页
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<DesktopOutlined />}
          onClick={() => {
            history.push("/craco-backstage-template/test");
          }}
        >
          Test
        </Menu.Item>
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="表格">
          <Menu.Item
            key="3"
            icon={<DesktopOutlined />}
            onClick={() => {
              history.push("/craco-backstage-template/table/basic-table");
            }}
          >
            基础表格
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<DesktopOutlined />}
            onClick={() => {
              history.push("/craco-backstage-template/table/drag-table");
            }}
          >
            基础表格
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
