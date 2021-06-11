import useStore from "@/store/index";
import { Menu, Layout } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "@/route/menu";

export default function BaseMenu() {
  let history = useHistory();
  const [selectedKeys, setSelectedKeys] = useState([
    "/craco-backstage-template",
  ]);
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const collapsed = useStore((state) => state.collapsed);
  const handleSelectKey = (path: string) => {
    history.push(path);
    setSelectedKeys([path]);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        mode="inline"
        theme="dark"
        style={{ minHeight: "100vh" }}
        selectedKeys={selectedKeys}
      >
        {routes.map((item) => {
          if (item.routes) {
            return (
              <SubMenu key={item.path} title={item.title}>
                {item.routes.map((i) => {
                  return (
                    <Menu.Item
                      key={i.path}
                      onClick={() => {
                        handleSelectKey(i.path);
                      }}
                    >
                      {i.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item
                key={item.path}
                onClick={() => {
                  handleSelectKey(item.path);
                }}
              >
                {item.title}
              </Menu.Item>
            );
          }
        })}
        {/* <Menu.Item
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
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}
