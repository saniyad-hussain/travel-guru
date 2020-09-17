import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SingleDestination from './components/SingleDestination/SingleDestination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/destination/:id">
					<SingleDestination></SingleDestination>
				</Route>
				<Route path="/login">
					<Login></Login>
				</Route>
				<PrivateRoute path="/booking">
					<Login></Login>
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

export default App;
