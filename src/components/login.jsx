import React, { Component } from 'react'
import Input from "../controls/input";

export class Login extends Component {
    render() {
        return (
            <div>
                <Input
                    name="emailID"
                    label="Email"                    
                />
                <Input
                    name="password"
                    label="Password"                    
                />
                <button type="button" class="btn btn-primary">Login</button>
            </div>
        )
    }
}

export default Login;
