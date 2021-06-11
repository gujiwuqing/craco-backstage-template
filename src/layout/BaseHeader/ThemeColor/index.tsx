import useStore from "@/store/index";
import { BgColorsOutlined, CheckOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { changeAntdTheme } from "dynamic-antd-theme";
import React, { useEffect } from "react";
import "./index.less";

const ThemeColor = () => {
  const { color, changeColor } = useStore((state) => ({
    color: state.color,
    changeColor: state.changeColor,
  }));
  const colors = [
    { label: "极客蓝", value: "#1F6DED" },
    { label: "科技蓝", value: "#008BFF" },
    { label: "清新绿", value: "#28B06E" },
    { label: "希望青", value: "#00BEAF" },
    { label: "活力橙", value: "#FF6A01" },
    { label: "优雅紫", value: "#5150A4" },
    { label: "中国红", value: "#C20404" },
    { label: "淡雅红 ", value: "#FF4D4F" },
  ];
  useEffect(() => {
    let themeColor = localStorage.getItem("color");
    if (themeColor) {
      // setColor(themeColor);
      changeAntdTheme(themeColor);
    } else {
      changeAntdTheme(color);
    }
  });
  const colorMenu = (
    <div className="color_container">
      <div className="color_header">主题色</div>
      <div className="color_content">
        {colors.map((item) => {
          return (
            <div key={item.value} className="color_item">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: item.value,
                  marginBottom: 12,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  changeAntdTheme(item.value);
                  changeColor && changeColor(item.value);
                  localStorage.setItem("color", item.value);
                }}
              >
                {color === item.value && (
                  <CheckOutlined style={{ color: "#fff" }} />
                )}
                {/* <CheckOutlined style={{ color: '#fff' }} /> */}
              </div>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <Dropdown overlay={colorMenu} trigger={["click"]} placement="bottomRight">
      <div onClick={(e) => e.preventDefault()} style={{ cursor: "pointer" }}>
        <BgColorsOutlined style={{ fontSize: 18 }} />
      </div>
    </Dropdown>
  );
};

export default ThemeColor;
