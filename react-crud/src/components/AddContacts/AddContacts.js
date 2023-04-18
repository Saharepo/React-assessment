
import React from "react";
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import "antd/dist/antd.css";
import {
    Input,
    InputNumber,
    Button,
    Form,
    Card,
    message,
  } from "antd";
import config from "../../config.json"

const AddContacts = ()=>{

  let SURVER_URL = config.SERVER_URL
  let navigate = useNavigate();
    const [form] = Form.useForm();

    //On Form submit
    const formSubmit = (values) => {
        console.log(values)
        axios.post(SURVER_URL+"/contacts/addContacts", values)
        .then((res)=>{
            setTimeout(() => {
              message.success("Item Added Successfully")
             }, 1000);
             navigate("/home")
        })
        .catch((err)=>{
            console.log(err)
        })
        form.resetFields();
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
    

    const layout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 12 },
          md: { span: 8 },
          lg: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
          md: { span: 12 },
          lg: { span: 12 },
        },
      };
      const tailLayout = {
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12, offset: 12 },
          md: { span: 12, offset: 8 },
          lg: { span: 12, offset: 8 },
        },
      };
    return(
        <div>
            <Card title="Create Contact" bordered={false} style={{ width:"70%",margin:"0 auto" }}>
    <Form {...layout} form = {form} onFinish={formSubmit} onFinishFailed={onFinishFailed}>

    <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Enter First Name!' }]}>
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          id="firstName"
        />
      </Form.Item>

      <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Enter Last Name!' }]}>
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          id="lastName"
        />
      </Form.Item>

      <Form.Item label="Email Id" name="email" rules={[{ required: true, type:"email", message: 'Enter email Id!' }]}>
        <Input
          placeholder="email"
          type="text"
          name="email"
          id="email"
        />
      </Form.Item>

      <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, pattern: new RegExp(/^[0-9]+$/), message: 'Enter Phone number!' }]}>
        <Input
          placeholder="phoneNumber"
          type="text"
          maxLength={10}
          minLength={10}
          name="phoneNumber"
          id="phoneNumber"
        />
        
      </Form.Item>

      <Form.Item label="City" name="city" rules={[{ required: true, message: 'Enter city!' }]}>
        <Input
          placeholder="city"
          type="text"
          name="city"
          id="city"
        />
      </Form.Item>

      <Form.Item label="State" name="state" rules={[{ required: true, message: 'Enter state!' }]}>
        <Input
          placeholder="state"
          type="text"
          name="state"
          id="state"
        />
      </Form.Item>

      <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Enter country!' }]}>
        <Input
          placeholder="country"
          type="text"
          name="country"
          id="country"
        />
      </Form.Item>

      <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true, message: 'Enter postal_code!' }]}>
        <Input
          placeholder="postalCode"
          type="text"
          name="postalCode"
          id="postalCode"
        />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit" >
          {" "}
          Submit{" "}
        </Button>
      </Form.Item>
      
    </Form>
    
    </Card>
        </div>
    )
}

export default AddContacts