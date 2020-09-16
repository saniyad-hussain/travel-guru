import React from 'react';
import logo from '../../resources/Logo.png';
import './Header.css';

const Header = () => {
	return (
		<div className="container ">
			<nav className="navbar navbar-expand-lg navbar-light  header-area">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" />
				</a>
				<form action="">
					<input type="text" name="" id="search-box" placeholder="Search Your Destination" />
				</form>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto ">
						<a className="nav-link active" href="#">
							News <span className="sr-only">(current)</span>
						</a>
						<a className="nav-link" href="#">
							Blog
						</a>
						<a className="nav-link" href="#">
							Destination
						</a>
						<a className="nav-link " href="#">
							Contact
						</a>
						<button className="loginBtn">Login</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
