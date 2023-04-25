import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css"
import { Link, useNavigate } from "react-router-dom";

const Register = () =>{
    //form Handler
    const onfinishHandler=(values) => {
        console.log(values)
    }
    return <>
       <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
}
export default Register;
