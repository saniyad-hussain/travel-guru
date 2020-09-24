import React from 'react';
import HeaderBlack from '../components/Header/HeaderBlack';

const NotFound = () => {
	return (
		<div>
			<HeaderBlack />
			<div className="container text-center">
				<img style={{ width: '60%' }} src="https://www.artzstudio.com/wp-content/uploads/2020/05/page-not-found-error-404.jpg" alt="" />
				<h1>We are Sorry! This page Doesn't exist.</h1>
			</div>
		</div>
	);
};

export default NotFound;
