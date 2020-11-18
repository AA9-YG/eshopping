import React, { Component } from 'react';
import Events from "./components/events";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
import EventDetails from './components/eventDetails';
import Register from './components/register';
import Login from './components/login';

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const users = require("./routes/user");
// const config = require("config");

// if(!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: JWT not defined");
//   process.exit(1);
// }

// app.use(express.json());
// app.use("/register", users);

// mongoose
//   .connect("mongodb://localhost/users", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connected successfully"))
//   .catch((err) => console.log("Error", err.message));

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, console.log("connected successfully to port 3000"));

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <Switch>
            <Route path="/login" component={Login}></Route>;
            <Route path="/register" component={Register}></Route>
            <Route path="/events/:id/:title" component={EventDetails}></Route>
            <Route path="/events" component={Events}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/not-found" component={PageNotFound}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </div>
    );
  };
}

export default App;
