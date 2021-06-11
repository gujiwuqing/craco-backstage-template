import React from "react";
import {BaseTable} from "@/components/BaseTable";
import { getUserList } from "@/services/table";
export default function index() {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      render: (_: any) => (_ ? "男" : "女"),
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <BaseTable
        columns={columns}
        key="id"
        request={async () => {
          const {
            data: { list },
          } = await getUserList();
          return { data: list, total: list.length };
        }}
      />
    </>
  );
}
