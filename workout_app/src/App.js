import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Photo from "./workout.png";

import HomePage from "./pages/HomePage/HomePage.component";
import Header from "./components/Header/Header.component.jsx";
import Contact from "./pages/Contact/Contact.component.jsx";
import About from "./pages/About/About.component.jsx";
import LoginAndLogout from "./pages/login-and-logout/login-and-logout.component.jsx";
import Error from "./pages/Error/Error.component.jsx";
import Profile from "./components/profile/profile.component.jsx";

import "./App.scss";
// import './debug.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img className="image" src={Photo} alt="Lady in Jumping Lunge" />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/Login" component={LoginAndLogout} />
          <Route path="/profile" component={Profile} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
