import React from 'react';
import './App.css';
import SignIn from './components/landin-page/sign-in';
import SignUp from './components/landin-page/sign-up';


function App() {
  return (
    <div className="login-or-signup-page">
      <header className="header-form">
        <div className="content">
          <h1>Logo</h1>
        </div>
      </header>
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
  );
}

export default App;
