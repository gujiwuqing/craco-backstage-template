import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { SubMenu } = Menu;
export default function BaseMenu() {
  let history = useHistory();
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        style={{ width: 200, height: "100vh" }}
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
      </Menu>
    </div>
  );
}
