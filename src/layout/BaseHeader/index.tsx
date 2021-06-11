import useStore from "@/store/index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import "./index.less";
import ThemeColor from "./ThemeColor";

export default function BaseHeader() {
  const { collapsed, toggleCollapsed } = useStore((state) => ({
    collapsed: state.collapsed,
    toggleCollapsed: state.toggleCollapsed,
  }));
  return (
    <div className="header">
      <div>
        <span
          onClick={toggleCollapsed}
          style={{ marginRight:8,cursor:'pointer' }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </span>
        <span>后台管理系统</span>
      </div>
      <ThemeColor />
    </div>
  );
}
