import React, { useState } from 'react';
import Header from '../Header/Header';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import fakeData from '../../fakeData/fakeData';
import { useParams } from 'react-router-dom';
import HeaderBlack from '../Header/HeaderBlack';
import { faDollarSign, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Hotel.css';
import hotelData from '../../fakeData/HotelData';

const Hotel = () => {
	const { id } = useParams();
	const placeInMap = fakeData.find((pl) => pl.id === parseInt(id));
	const hotels = hotelData.filter((hotel) => hotel.location.toLowerCase() === placeInMap.name.toLowerCase());
	console.log(hotels);
	const MyMapComponent = withScriptjs(
		withGoogleMap(() => (
			<GoogleMap defaultZoom={6} defaultCenter={{ lat: 24.4768783, lng: 90.2932426 }}>
				<Marker position={{ lat: placeInMap.lat, lng: placeInMap.lang }}>
					<InfoWindow>
						<p>{placeInMap.name}</p>
					</InfoWindow>
				</Marker>
			</GoogleMap>
		))
	);
	return (
		<>
			<HeaderBlack></HeaderBlack>
			<div>
				<div className="container">
					<div className="container">
						<h2 className="text-center heading">Best Hotels In {placeInMap.name}</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							{hotels.map((hotelInfo) => {
								return (
									<div className="card hotel-card">
										<img className="card-img-top hotel-img" src={hotelInfo.image} alt="" />
										<div className="card-body hotel-body">
											<p className="hotel-title">{hotelInfo.name}</p>
											<p className="hotel-info">{hotelInfo.description}</p>
											<p className="hotel-price">
												<FontAwesomeIcon icon={faDollarSign} /> 1,557 <small>/ night</small>
											</p>
										</div>
										<div className="card-footer ">
											<button className="btn btn-danger">
												Book a Room&#160;&#160;
												<FontAwesomeIcon icon={faKey} />
											</button>
										</div>
									</div>
								);
							})}
						</div>
						<div className="col-md-6">
							<MyMapComponent
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYy8St6FRseHnmS1IdZa8cNJrCdrLziBE&v=3.exp&libraries=geometry,drawing,places"
								loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
								containerElement={<div style={{ height: `800px`, width: `100%` }} />}
								mapElement={<div style={{ height: `100%`, width: `100%` }} />}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hotel;
