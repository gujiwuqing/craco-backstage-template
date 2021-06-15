import React from "react";
import { TranslationOutlined } from "@ant-design/icons";
import { Menu, Dropdown, message } from "antd";
import { useTranslation } from "react-i18next";
export default function Language() {
  const { i18n } = useTranslation();
  const onClick = ({ key }: any) => {
    i18n.changeLanguage(key);
    key === "zh_CN"
      ? message.success("切换语言成功")
      : message.success("Switch Language Success");
    localStorage.setItem("language", key);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="zh_CN">中文</Menu.Item>
      <Menu.Item key="en_US">English</Menu.Item>
    </Menu>
  );
  return (
    <div className="header-icon">
      <Dropdown overlay={menu} trigger={["click"]}>
        <TranslationOutlined className="header-icon" />
      </Dropdown>
    </div>
  );
}
