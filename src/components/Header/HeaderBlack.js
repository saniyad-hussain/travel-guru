import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../App';
import logo from '../../resources/Logo.png';
import './Header.css';

const HeaderBlack = () => {
	const [user, setUser] = useContext(userInfo);
	return (
		<div className="container-fluid ">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark  header-area">
					<Link to="/">
						<a className="navbar-brand">
							<img src={logo} alt="" />
						</a>
					</Link>
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

							{user.isLoggedIn ? (
								<button onClick={() => setUser({})} className="mainBtn">
									SignOut
								</button>
							) : (
								<Link to="/login">
									<button className="mainBtn">Login</button>
								</Link>
							)}
							<small className="profile">{user.firstname}</small>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default HeaderBlack;
