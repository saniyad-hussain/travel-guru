import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SingleDestination from './components/SingleDestination/SingleDestination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Hotel from './components/Hotel/Hotel';
import Login from './components/Login/Login';
import NotFound from './NotFound/NotFound';
export const userInfo = createContext();

function App() {
	const [user, setUser] = useState({
		isLoggedIn: false,
		firstname: '',
		email: '',
		password: '',
		success: false,
		error: '',
	});
	return (
		<userInfo.Provider value={[user, setUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/destination/:id">
						<SingleDestination></SingleDestination>
					</Route>

					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/booking/:id">
						<Hotel></Hotel>
					</PrivateRoute>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</userInfo.Provider>
	);
}

export default App;
