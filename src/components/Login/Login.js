import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import Header from '../Header/Header';
import './Login.css';
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [user, setUser] = useState({
		isLoggedIn: false,
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		success: false,
		error: '',
	});
	const handleBlur = (e) => {
		let validField;
		if (e.target.name === 'email') {
			validField = /\S+@\S+\.\S+/.test(e.target.value);
		}
		if (e.target.name === 'password') {
			const passwordLength = e.target.value.lenght > 6;
			const hasNumber = /\d{1}/.test(e.target.value);
			validField = passwordLength && hasNumber;
		}
		if (validField) {
			const newUser = { ...user };
			newUser[e.target.name] = e.target.value;
			console.log(setUser(newUser));
		}
	};

	const handleSubmit = (e) => {
		if (user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					console.log(res);
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
				});
		}
	};

	return (
		<div>
			<Header></Header>
			<div className="login-area">
				{user.success && <p>Account Created Successfully</p>}
				<form>
					<div className="form-group">
						<label htmlFor="firstname">First Name</label>
						<input type="text" name="firstname" onBlur={handleBlur} className="form-control" id="" />
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input type="text" name="lastname" onBlur={handleBlur} className="form-control" id="" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Username Or Email</label>
						<input type="text" name="email" onBlur={handleBlur} className="form-control" id="" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" onBlur={handleBlur} className="form-control" id="" />
					</div>
					<div className="d-flex justify-content-between p-2 space">
						<div class="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
							<label className="form-check-label" for="defaultCheck1">
								Remember Password
							</label>
						</div>
						<div>
							<a href="/"> Forgot Password?</a>
						</div>
					</div>

					<input onClick={handleSubmit} type="submit" value="Sign In" className="bookingBtn" />
					<div className="space">
						<p className="text-center">
							Don't Have Account? <button> Create New Account</button>
						</p>
					</div>
				</form>
			</div>
			<div className="text-center login-footer">
				<div>
					<p>Or</p>
				</div>
				<div className="fbgoogle">
					<img src="../../resources/Icon/fb.png" alt="" />
					<p> Continue With Facebook</p>
				</div>
				<div className="fbgoogle">
					<img src="../../resources/Icon/google.png" alt="" />
					<p> Continue With Google</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
