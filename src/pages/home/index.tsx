import React from "react";
import { Button,Input } from "antd";
// import { changeAntdTheme } from "dynamic-antd-theme";
import useStore from "@/store/index";
const Home = () => {
  const { bears, increasePopulation } = useStore((state) => ({
    bears: state.bears,
    increasePopulation: state.increasePopulation,
  }));
  return (
    <>
      <div>{bears}</div>
      <Input/>
      <Button
        onClick={() => {
          increasePopulation();
        }}
      >
        换肤
      </Button>
    </>
  );
};

export default Home;
