import React from 'react'
import AuthTextLeft from "../components/AuthTextLeft";
import {Form} from "react-bootstrap";
import DefaultInput from "../../components/input/DefaultInput";
import {Link} from "react-router-dom";
import DefaultButton from "../../components/button/DefaultButton";

const Login = (props) => {
    return (
        <div className="d-flex align-items-center">
            <AuthTextLeft class="col7"/>
            <div className="col5">
                <div className="authFormContainer">
                    <div className="authHeader">
                        Not a photographer? <Link to={"/auth/login"} className="ms-1">Sign In here</Link>
                    </div>
                    <div className="authFormCard">
                        <div>
                            <h2>Join Kwikpic</h2>
                            <span>Be a part of our photographer’s community </span>
                        </div>
                        <Form>
                            <DefaultInput placeholder="Enter Full Name"/>
                            <DefaultInput placeholder="Enter Company Name"/>
                            <DefaultInput placeholder="Enter Company Email"/>
                            <DefaultInput placeholder="Enter Company Mobile Number"/>
                            <div className="mt-3"></div>
                            <DefaultButton title="Continue"/>
                        </Form>
                    </div>
                    <div className="authFooter"></div>
                </div>
            </div>
        </div>
    );

}

export default Login;
