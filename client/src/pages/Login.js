import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyles.css"
import { Link} from "react-router-dom";

const Login = () =>{
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
          <h3 className="text-center">Login From</h3>
          
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/Register" className="m-2">
            Not user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
}
export default Login;
