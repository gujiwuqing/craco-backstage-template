import useStore from "@/store/index";
import { Menu, Layout } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "@/route/menu";
import { useTranslation } from "react-i18next";
export default function BaseMenu() {
  const { t } = useTranslation();
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
              <SubMenu key={item.path} title={t(item.name)}>
                {item.routes.map((i) => {
                  return (
                    <Menu.Item
                      key={i.path}
                      onClick={() => {
                        handleSelectKey(i.path);
                      }}
                    >
                      {t(i.name)}
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
                {t(item.name)}
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
}
