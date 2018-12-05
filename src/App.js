import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <h2 className="Heading">DataOptics </h2>
          </div>

          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
              or
              <NavLink
                exact
                to="/"
                className="FormTitle__Link"
                activeClassName="FormTitle__Link--Active"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
              <div className="FormCenter">
                <form className="FromFields" onSubmit={this.handleSubmit}>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="FormField__Input"
                      placeholder="Enter your full name"
                      name="name"
                    />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="FormField__Input"
                      placeholder="Enter your email"
                      name="email"
                    />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="FormField__Input"
                      placeholder="Enter your password"
                      name="password"
                    />
                  </div>

                  <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                      <input
                        className="FormField__CheckboxLabel"
                        type="checkbox"
                        name="hasAgreed"
                      />
                      I agree all statement in
                      <a herf="#" className="FormField__TermsLink">
                        terms of service
                      </a>
                    </label>
                  </div>

                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button>
                    <a herf="#" className="FormField__Link">
                      I am already member
                    </a>
                  </div>
                </form>
              </div>
            </Route>
            <Route exact path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
