import React, { Component } from 'react';
import Input from "../controls/input";

const Joi = require("joi-browser");

export class Form extends Component {
    state = {data: {}, errors: {} };

    handleChange = ({ currentTarget: input }) => {
        //clone the errors
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        //console.log(errorMessage);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        // clone the data
        const data = { ...this.state.data };
        data[input.name] = input.value;
        // set the state
        this.setState({ data, errors });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateInput();
        this.setState({errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    validateProperty = ({ name, value }) => {
        // if (name === "username") {
        //   if (value.trim() === "") return "username is required";
        // }
        // if (name === "password") {
        //   if (value.trim() === "") return "password is required";
        // }
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    validateInput = () => {
        // const errors = {};
        // if (this.state.data.username === "")
        //   errors.username = "Username required";
    
        // if (this.state.data.password === "")
        //   errors.password = "Password required";
        // return Object.keys(errors).length === 0 ? null : errors;
        const result = Joi.validate(this.state.data, this.schema, {
          abortEarly: false,
        });
        console.log(result);
        if (!result.error) return null;
        const errors = {};
        for (let item of result.error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    renderButton(label) {
        return <button type="button" class="btn btn-primary">{label}</button>
    };

    renderInput(name, label, value){
        return <Input
            name={name}
            label={label}
            value={value}
            onChange={this.handleChange}
            error={this.state.errors[name]}
            />
    };

    renderSelect(name, label, catagory){
        return (<div>
        <label htmlfor={name}>{label}</label>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {catagory}</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        </div>
      </div>
      </div>);
    };
}

export default Form;
