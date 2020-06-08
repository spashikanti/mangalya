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
import UsersPage from "./components/users/UsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from './components/Customer/customers';
import ManageUserPage from './components/users/ManageUserPage';
import CoursesPage from './components/course/CoursesPage';


function App() {
    return (
      <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/user/:userId" component={ManageUserPage} />
          <Route path="/user" component={ManageUserPage} />
          <Route path="/customers" component={Customers} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
}

export default App