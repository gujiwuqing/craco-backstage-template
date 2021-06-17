import useStore from "@/store/index";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import React from "react";
import "./index.less";
import ThemeColor from "./ThemeColor";
import Language from "./Language";
import UserInfo from "./UserInfo";
import {useTranslation} from "react-i18next";

export default function BaseHeader() {
    const {t} = useTranslation();
    const {collapsed, toggleCollapsed} = useStore((state: any) => ({
        collapsed: state.collapsed,
        toggleCollapsed: state.toggleCollapsed,
    }));
    return (
        <div className="header">
            <div>
        <span
            onClick={toggleCollapsed}
            style={{marginRight: 8, cursor: "pointer"}}
        >
          {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </span>
                <span>{t("title")}</span>
            </div>
            <div className="header-right">
                <ThemeColor/>
                <Language/>
                <UserInfo/>
            </div>
        </div>
    );
}
