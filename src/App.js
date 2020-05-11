import React from 'react';
import './App.css';
import SignIn from './redux/View/Authentication/landin-page/sign-in';
import SignUp from './redux/View/Authentication/landin-page/sign-up';
import Navbar from './components/Navbar/Navbar-component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  return (
    <Router>
        <div className="login-or-signup-page">
              <Navbar/>
          <main>
            <div className="login-forms">
              <div className="login-form-section">
                <div>
                  <SignIn></SignIn>              
                </div>
              </div>
              <div className="signup-form-section">
                <div>
                  <SignUp></SignUp>
                </div>
              </div>
            </div>
          </main>

          <footer className="footer-form">
            <div className="content">
              <h1>Footer</h1>
            </div>
          </footer>

        </div>
    </Router>
  );
}

export default App;
