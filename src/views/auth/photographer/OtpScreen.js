import React from "react";
import OtpInput from "react-otp-input";
import {Link} from "react-router-dom";
import AuthTextLeft from "../components/AuthTextLeft";
import {Form} from "react-bootstrap";
import DefaultButton from "../../components/button/DefaultButton";

const OtpScreen = (props) => {
    return (
        <div className="d-flex align-items-center">
            <AuthTextLeft class="col7"/>
            <div className="col5">
                <div className="authFormContainer">
                    <div className="authHeader"></div>
                    <div className="authFormCard">
                        <div>
                            <h2>Sign in to Kwikpic</h2>
                            <span>Enter your Email ID or Phone Numer to continue</span>
                        </div>
                        <Form>
                            <div className="mt-5"></div>
                            <OtpInput
                                className="otp-input"
                                numInputs={4}
                                separator={<span className="p-1"></span>}
                            />

                            <span className="text-danger form-group d-flex"></span>

                            <div className="mt-3"></div>
                            <DefaultButton title="Continue" onClick="/auth/selectUser"/>
                        </Form>

                        <div className="form-note-s2 pt-2">
                            <Link to="/">Resend OTP?</Link>
                        </div>
                    </div>
                    <div className="authFooter"></div>
                </div>
            </div>
        </div>
    );
}

export default OtpScreen;
