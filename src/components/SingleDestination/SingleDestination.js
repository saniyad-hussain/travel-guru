import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import './SingleDestination.css';

const SingleDestination = () => {
	const { id } = useParams();
	const selctedPlace = fakeData.find((sp) => sp.id === parseInt(id));

	return (
		<div className="container-fluid main-area">
			<Header></Header>
			<div className="container destination">
				<div className="col-md-7">
					<h1>{selctedPlace.name}</h1>
					<p>{selctedPlace.description}</p>
				</div>
				<div className="col-md-5">
					<div className="booking-form">
						<form action="">
							<div className="form-group">
								<label for="exampleInputEmail1">Origin</label>
								<input className="form-control" type="text" name="origin" id="" />
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Destination</label>
								<input className="form-control" type="text" name="Destination" id="" />
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label for="exampleInputEmail1">From</label>
										<input className="form-control" type="date" name="Destination" id="" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label for="exampleInputEmail1">To</label>
										<input className="form-control" type="date" name="Destination" id="" />
									</div>
								</div>
							</div>
							<Link to="/booking">
								<button type="submit" className="bookingBtn">
									Start Booking
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleDestination;
