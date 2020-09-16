import React from 'react';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
	return (
		<div className="container-fluid main-area">
			<Header></Header>
			<Destination></Destination>
		</div>
	);
};

export default Home;
