import React from 'react'
import { Route, Switch } from "react-router-dom";
// import { Provider } from 'react-redux'
// import logo from './logo.svg'
// import './App.css'
// import store from './store'
// import Customers from './components/Customer/customers'
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';

function App() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
}

export default App
