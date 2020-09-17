import React from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) => (
				// fakeAuth.isAuthenticated ? (
				// 	children
				// ) :
				<Redirect
					to={{
						pathname: '/login',
						state: { from: location },
					}}
				/>
			)}
		/>
	);
};

export default PrivateRoute;
