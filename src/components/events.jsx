import React, { Component } from 'react';
import { getEvents } from "./fakeEventService";
import { Link, Route } from "react-router-dom";
import Form from '../controls/form';

// const INITIAL_EVENTS = {
//     initEvents: getEvents()
// }

class Events extends Form {
    state = {
        data: getEvents(),
        errors: {},
        initialEvents: getEvents()
    };

    handleDelete = (e) => {
        const eventsUpdated = this.state.data.filter((event) => event._id != e._id);
        this.setState({ data: eventsUpdated });
        //this.setState({ initialEvents: eventsUpdated});
    };

    componentDidMount = () => {
        console.log("App-mounted");
    };

    componentWillUnmount()  {
        console.log("App unmount");
    };

    handleFilter = e => {
        const category = e.target.innerText.toString();
        console.log(category);
        if (category === "All Categories"){
            let eventsAllCateg = [...this.state.initialEvents];
            this.setState({data: eventsAllCateg});
        }
        else if (category === "Arts") {
          let eventsArts = [...this.state.initialEvents];
          let arts = eventsArts.filter((event) => event.category.name === category);
          this.setState({data: arts});
        }
        else if (category === "Fitness") {
            let eventsFit = [...this.state.initialEvents];
            let fit = eventsFit.filter((event) => event.category.name === category);
            this.setState({data: fit});
        }        
        else if (category === "Sports") {
            let eventsSports = [...this.state.initialEvents];
            let sports = eventsSports.filter((event) => event.category.name === category);
            this.setState({data: sports});
        } 
    };

    render() {
        const { length: count } = this.state.data;
        return (
            <div>
                <br/>
                <h2>Showing {count} movies from database</h2>
                <br/>
                <div>
                <div class="list-group" style={{width:"200px", position: "relative", left: "0%"}}>
                  <button id="category" type="button" class="list-group-item list-group-item-action" onClick={this.handleFilter}>All Categories</button>
                  <button id="arts" type="button" class="list-group-item list-group-item-action" onClick={this.handleFilter}>Arts</button>
                  <button id="fitness" type="button" class="list-group-item list-group-item-action" onClick={this.handleFilter}>Fitness</button>
                  <button id="sports" type="button" class="list-group-item list-group-item-action" onClick={this.handleFilter}>Sports</button>
                </div>
                <div style={{width: "1000px", position: "relative", left: "30%", bottom: "200px"}}>
                <table class="table">
                    <thead>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Tickets Available</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {count === 0 && (
                            <tr>
                                <td colspan="4">No Data Found</td>
                            </tr>
                        )}
                        {this.state.data.map((e) => (
                            <tr key={e._id}>
                                <td>
                                <Link to={`/events/${e._id}/${e.title}/${e.category.name}/${e.numberOfTicketsAvailable}`}>{e.title}</Link>
                                </td>
                                <td>{e.category.name}</td>
                                <td>{e.numberOfTicketsAvailable}</td>
                                <td>{e.Price}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(e)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        );
    };
}

export default Events;