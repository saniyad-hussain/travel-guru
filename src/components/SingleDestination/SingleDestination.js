import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import './SingleDestination.css';

const SingleDestination = () => {
	const { id } = useParams();
	const history = useHistory();
	const selctedPlace = fakeData.filter((sp) => sp.id === parseInt(id));
	const handleBooking = (id) => {
		history.push(`/booking/${id}`);
	};
	return (
		<div className="container-fluid main-area">
			<Header></Header>
			{selctedPlace.map((placeInfo) => {
				return (
					<div className="container destination">
						<div className="col-md-7">
							<h1>{placeInfo.name}</h1>
							<p>{placeInfo.description}</p>
						</div>
						<div className="col-md-5">
							<div className="booking-form">
								<form
									action=""
									onSubmit={() => {
										handleBooking(placeInfo.id);
									}}
								>
									<div className="form-group">
										<label for="exampleInputEmail1">Origin</label>
										<input className="form-control" type="text" name="origin" id="" required />
									</div>
									<div className="form-group">
										<label for="exampleInputEmail1">Destination</label>
										<input className="form-control" type="text" name="Destination" id="" required value={placeInfo.name} />
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="exampleInputEmail1">From</label>
												<input className="form-control" type="date" name="Destination" id="" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="exampleInputEmail1">To</label>
												<input className="form-control" type="date" name="Destination" id="" required />
											</div>
										</div>
									</div>

									<button type="submit" className="bookingBtn">
										Start Booking
									</button>
								</form>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SingleDestination;
