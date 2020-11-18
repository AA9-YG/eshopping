import React, { Component } from 'react'
import Form from '../controls/form';
import Input from "../controls/input";
import Events from './events';

export class EventDetails extends Events {
    
    handleSubmit = () => {
       // Navigate back to events page
       this.props.history.push("/events");
   }
   
    render() {
        return (
            // <div>
            //     <h1>Event Details:</h1>
            //     <h3>Event Id: {this.props.match.params.id}</h3>
            //     <h3>Event Title: {this.props.match.params.title}</h3>
            //     <button onClick={this.handleBack}>Back</button>
            // </div>
            <form className="w-50" onSubmit={this.handleSubmit}>
                {this.renderInput("title", "Event Name", this.props.match.params.title)}
                {this.renderSelect("catagory", "Catagory")}
                {this.renderInput("numOfTicketsAvailable", "Tickets Available")}
                {this.renderInput("price", "Price")}
                {this.renderButton("Save")}
            </form>
        )
    }
}

export default EventDetails;
