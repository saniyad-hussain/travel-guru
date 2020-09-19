import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../App';
import logo from '../../resources/Logo.png';
import './Header.css';

const Header = () => {
	const [user, setUser] = useContext(userInfo);
	return (
		<div className="container ">
			<nav className="navbar navbar-expand-lg navbar-light  header-area">
				<a className="navbar-brand" href="/">
					{window.location.pathname === '/login' || window.location.pathname === '/signup' ? (
						<img src={logo} className="conditional-logo" alt="" />
					) : (
						<img src={logo} alt="" />
					)}
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
					{window.location.pathname === '/login' || window.location.pathname === '/signup' ? (
						<div className="navbar-nav ml-auto conditional-nav">
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
							<button className="mainBtn">Login</button>
						</div>
					) : (
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
							<p>{user.firstName}</p>
							<button onClick={() => setUser({})} className="mainBtn">
								Sign Out
							</button>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
