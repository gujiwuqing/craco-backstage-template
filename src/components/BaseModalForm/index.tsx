import React, {  ReactNode,ReactElement } from 'react';
import { Button, message } from 'antd';
import { ModalForm ,ModalFormProps} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

interface BaseModalFormProps extends ModalFormProps {
  triggerRender: () => ReactElement;
  children: ReactNode;
}

const defaultTrigger = () => (
  <Button type="primary">
    <PlusOutlined />
    新建表单
  </Button>
);

const BaseModalForm = ({ triggerRender, children, ...reset }: BaseModalFormProps) => {
  return (
    <ModalForm
      title="新建表单"
      trigger={triggerRender ? triggerRender() : defaultTrigger()}
      modalProps={{
        onCancel: () => console.log('run'),
      }}
      {...reset}
    >
      {children}
    </ModalForm>
  );
};

export default BaseModalForm;
