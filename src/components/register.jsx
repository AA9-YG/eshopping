import React, { Component } from 'react';
import Input from "../controls/input";
import Joi, { join } from "joi-browser";
import Form from '../controls/form';

class Register extends Form {
    state= {
        data: {
            username: "",
            emailID: "",
            password: "",
            admin: false,
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().min(3).max(20).label("Username"),
        emailID: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    };

    doSubmit = () => {
        console.log("submitted");
    }

    render() {
        return (
            <div>
                <form className="w-50">
                    {this.renderInput("username", "Username")}
                    {this.renderInput("emailID", "Email")}
                    {this.renderInput("password", "Password")}
                    {this.renderSelect("catagory", "Catagory")}
                    {this.renderButton("Submit")}
                </form>                 
            </div>
        )
    }
}

export default Register;