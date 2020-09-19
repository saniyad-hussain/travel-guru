import React, { useContext, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { userInfo } from '../../App';
import './Login.css';
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
	const [newUser, setNewUser] = useState(false);

	const handleChange = (e) => {
		const fname = e.target.name;
		const fvalue = e.target.value;
		let isFieldValid;
		if (fname === 'email') {
			isFieldValid = /\S+@\S+\.\S+/.test(fvalue);
		}
		if (fname === 'password') {
			const passwordLength = fvalue.length > 6;
			const containNumber = /\d{1}/.test(fvalue);
			isFieldValid = passwordLength && containNumber;
		}
		if (isFieldValid) {
			const newUser = { ...user };
			newUser[fname] = fvalue;
			setUser(newUser);
		}
	};
	const handleSubmit = (e) => {
		if (newUser && user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUser = { ...user };
					newUser.success = true;
					setUser(newUser);
				})
				.catch((error) => {
					console.log(error);
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
				})
				.catch((error) => {
					console.log(error);
				});
		}

		e.preventDefault();
	};
	return (
		<div className="login-area">
			<form onSubmit={handleSubmit}>
				{newUser ? (
					<div>
						<div className="form-group">
							<label htmlFor="firstname">First Name</label>
							<input type="text" name="firstname" onBlur={handleChange} className="form-control" id="" />
						</div>
						<div className="form-group">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" name="lastname" onBlur={handleChange} className="form-control" id="" />
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" onBlur={handleChange} className="form-control" id="" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" onBlur={handleChange} className="form-control" id="" />
						</div>
						<input type="submit" value="Submit" />
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
						<input type="submit" value="Submit" />{' '}
					</div>
				)}
			</form>
			{user.success && <h1>Created {console.log(user)}</h1>}
			{user.isLoggedIn && <h1>{console.log(user)}</h1>}
			<button onClick={() => setNewUser(!newUser)}>{newUser ? 'Login' : 'SignUp'}</button>
		</div>
	);
};

export default Login;
