import React from 'react';
import BaseModalForm from '@/components/BaseModalForm';
import { Button, Form, Input, message } from 'antd';

export default function Create() {
  return (
    <>
      <BaseModalForm
        triggerRender={() => <Button type="primary">新建</Button>}
        onFinish={(values: any) => {
          console.log(values);
          message.success('添加成功')
          return true;
        }}
      >
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input />
        </Form.Item>
      </BaseModalForm>
    </>
  );
}
