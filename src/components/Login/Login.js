import React, { useContext, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { userInfo } from '../../App';
import './Login.css';
import 'firebase/database';
import 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import HeaderBlack from '../Header/HeaderBlack';
import google from '../../resources/Icon/google.png';
import facebook from '../../resources/Icon/fb.png';

const firebaseConfig = {
	apiKey: 'AIzaSyC6PZwWOxfVvUsNfoQp8uZZLRuYQiIQRmc',
	authDomain: 'tour-guide-ccd0b.firebaseapp.com',
	databaseURL: 'https://tour-guide-ccd0b.firebaseio.com',
	projectId: 'tour-guide-ccd0b',
	storageBucket: 'tour-guide-ccd0b.appspot.com',
	messagingSenderId: '1039967621921',
	appId: '1:1039967621921:web:9eada7c2853525b84b6460',
};
firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [user, setUser] = useContext(userInfo);
	const [newloggedUser, setnewLoggedUser] = useState({
		isLoggedIn: false,
		firstname: '',
		email: '',
		password: '',
	});
	const [newUser, setNewUser] = useState(false);
	const [warning, setWarning] = useState({
		emailWarn: '',
		passwordWarn: '',
		password: '',
		confirmPassword: '',
	});
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	const handleChange = (e) => {
		const fname = e.target.name;
		const fvalue = e.target.value;
		let isFieldValid;
		if (fname === 'firstname') {
			isFieldValid = fvalue.length > 0;
		}
		if (fname === 'email') {
			if (/\S+@\S+\.\S+/.test(fvalue)) {
				isFieldValid = true;
			} else {
				isFieldValid = false;
				setWarning({ emailWarn: 'Email is not valid' });
			}
		}
		if (fname === 'password') {
			const passwordLength = fvalue.length > 6;
			const containNumber = /\d{1}/.test(fvalue);
			if (passwordLength && containNumber) {
				isFieldValid = true;
				setWarning({ password: fvalue });
			} else {
				isFieldValid = false;
				setWarning({ passwordWarn: 'Password Must Be More Than 6 and Contain One Number' });
			}
		}
		if (fname === 'confirmPssword') {
			if (warning.password === fvalue) {
				isFieldValid = true;
			} else {
				isFieldValid = false;
				setWarning({ confirmPassword: 'Password Doesnt Match' });
			}
		}
		if (isFieldValid) {
			const newUser = { ...user };
			newUser[fname] = fvalue;
			setUser(newUser);
		}
	};

	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const newloggedUser = { firstname: displayName, email };
				newloggedUser.isLoggedIn = true;
				setUser(newloggedUser);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const handleSubmit = (e) => {
		if (newUser && user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUser = { ...user };
					newUser.success = true;
					newUser.error = '';
					setUser(newUser);
					history.replace(from);
				})
				.catch((error) => {
					const newUser = { ...user };
					newUser.success = false;
					newUser.error = error.message;
					setUser(newUser);
				});
		}

		if (!newUser && user.email && user.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const loggedUser = { ...user };
					loggedUser.isLoggedIn = true;
					setUser(loggedUser);
					history.replace(from);
				})
				.catch((error) => {
					const loggedUser = { ...user };
					loggedUser.error = error.message;
					setUser(loggedUser);
				});
		}

		e.preventDefault();
	};

	const handleFBLogin = () => {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				const { displayName, email } = result.user;
				const signedInUser = { firstname: displayName, email };
				signedInUser.isSignedIn = true;
				setUser(signedInUser);
				history.replace(from);
			})
			.catch(function (error) {});
	};
	return (
		<>
			<HeaderBlack></HeaderBlack>
			<div className="login-area">
				<form onSubmit={handleSubmit}>
					{newUser ? (
						<div>
							<div className="form-group">
								<label htmlFor="firstname">Name</label>
								<input type="text" name="firstname" onBlur={handleChange} className="form-control" id="" />
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input type="text" name="email" onBlur={handleChange} className="form-control" id="emailInput" />
								{warning.emailWarn}
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" onBlur={handleChange} className="form-control" id="" />
								{warning.passwordWarn}
							</div>
							<div className="form-group">
								<label htmlFor="password">Confirm Password</label>
								<input type="password" name="confirmPssword" onBlur={handleChange} className="form-control" id="" />
								{warning.confirmPassword}
							</div>
							<p className="warning">{user.error}</p>
							<button type="submit" className="btn btn-success">
								Sign Up
							</button>
						</div>
					) : (
						<div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input type="text" name="email" onBlur={handleChange} className="form-control" id="" />
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" onBlur={handleChange} className="form-control" id="" />
							</div>
							<p className="warning">{user.error}</p>
							<button type="submit" className="btn btn-success">
								{' '}
								Login
							</button>
						</div>
					)}
				</form>
				{}
				<button className="btn btn-info" style={{ margin: '25px' }} onClick={() => setNewUser(!newUser)}>
					{newUser ? 'Already Have Account? Login Now' : 'Create New Account, SignUp Now'}
				</button>
				<div className="text-center container footerBtn">
					<div className="container separator">
						<h6>
							<span>or</span>
						</h6>
					</div>
					<button onClick={handleGoogleSignIn} className="google-login d-flex justify-content-center ">
						<div className="social-icon ">
							<img src={google} className="icons" alt="" />
						</div>
						<div className="social-text ">
							<p> Continue With Google</p>
						</div>
					</button>
					<button onClick={handleFBLogin} className="google-login d-flex justify-content-center ">
						<div className="social-icon ">
							<img src={facebook} className="icons" alt="" />
						</div>
						<div className="social-text ">
							<i class="fa fa-google" aria-hidden="true"></i>
							<p> Continue With Facebook</p>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default Login;
