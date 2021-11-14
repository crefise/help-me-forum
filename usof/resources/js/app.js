/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react'
import ReactDOM from 'react-dom';

// Import pages
import Profile from "./Pages/Profile"
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage';
import UserPage from './Pages/UserPage';
import PostsPage from './Pages/PostsPage';
import PostPage from './Pages/PostPage';

if (document.querySelector("#profile")) {
   ReactDOM.render(<Profile />, document.querySelector("#profile"));
}
if (document.querySelector("#welcome")) {
   ReactDOM.render(<h1>Super welcome</h1>, document.querySelector("#welcome"));
}
if (document.querySelector("#login")) {
   ReactDOM.render(<LoginPage />, document.querySelector("#login"));
}
if (document.querySelector("#registration")) {
   ReactDOM.render(<RegistrationPage />, document.querySelector("#registration"));
}
if (document.querySelector("#users")) {
   ReactDOM.render(<UsersPage />, document.querySelector("#users"));
}
if (document.querySelector("#userPage")) {
   ReactDOM.render(<UserPage />, document.querySelector("#userPage"));
}
if (document.querySelector("#posts")) {
   ReactDOM.render(<PostsPage />, document.querySelector("#posts"));
}
if (document.querySelector("#postPage")) {
   ReactDOM.render(<PostPage />, document.querySelector("#postPage"));
}

