import React from 'react'
import AuthTextLeft from "../components/AuthTextLeft";
import {Form} from "react-bootstrap";
import DefaultButton from "../../components/button/DefaultButton";

const SelectUser = (props) => {
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
                            <div className="mt-3"></div>

                            <UserCard/>

                            <div className="mt-3"></div>
                            <DefaultButton title="Continue"  onClick="/"/>
                        </Form>
                    </div>
                    <div className="authFooter"></div>
                </div>
            </div>
        </div>
    );
}

const UserCard = (props) => {
    return (
        <div className="userCard">
            <div className="form-check">
                <input className="form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <img src="../../../../assets/images/auth/user.png" alt="user"/>
                    <span>I’m a User, viewing & uploading photos for my events</span>
                    <span className="checked"></span>
                    <span className="unchecked"></span>
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       checked/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <img src="../../../../assets/images/auth/photographer.png" alt="user"/>
                    <span>I’m a Photographer, delivering photos professionally</span>
                    <span className="checked"></span>
                    <span className="unchecked"></span>
                </label>
            </div>
        </div>
    )
}


export default SelectUser;
