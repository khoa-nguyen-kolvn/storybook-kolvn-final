import React from 'react';
import { Button, Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2';

export const AddOperator = () => {
  return (
    <div className="page add-operator-page">
    <header>
    <h1>Add Operator</h1>
  </header>
  <main>
    <Form size="large" layout="vertical">
      <Form.Item
        label="Operator Name"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Operator Number"
        name="phone"
      >
       <PhoneInput country="us" inputClass="ant-input" specialLabel/>
      </Form.Item>
    </Form>
    <Form.Item
        label="Operator PIN"
        name="pin"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Operator RFID"
        name="rfid"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Operator Role"
        name="role"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Preferred Language"
        name="lang"
      >
        <Input />
      </Form.Item>
  </main>
  <footer>
    <Button>CANCEL</Button>
    <Button type="primary">ADD</Button>
  </footer>
</div> 
 );
};