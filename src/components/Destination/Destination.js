import React, { useState } from 'react';
import './Destination.css';
import fakeData from '../../fakeData/fakeData';
import InfoCard from '../InfoCard/InfoCard';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

const Destination = () => {
	const destinationInfo = fakeData;
	const [destinations, setDestinations] = useState(destinationInfo);
	const [hoverId, setHoverId] = useState(0);
	const breakPoints = [{ width: 700, itemsToShow: 2 }];
	const handleHover = (id) => {
		const hoverInfo = destinations.find((dt) => dt.id === id);
		setHoverId(hoverInfo);
	};
	return (
		<div className="container destination ">
			<div className="row">
				<div className="col-md-4">
					{hoverId ? (
						<div className="info">
							<h1>{hoverId.name}</h1>
							<p>{hoverId.description}</p>
							{hoverId.name && (
								<Link to={`/destination/${hoverId.id}`}>
									<button className="mainBtn">Explore Now</button>
								</Link>
							)}
						</div>
					) : (
						<div className="info">
							<h1>{destinationInfo[0].name}</h1>
							<p>{destinationInfo[0].description}</p>
							{destinationInfo[0].name && (
								<Link to="/destination/1">
									<button className="mainBtn">Book Now</button>
								</Link>
							)}
						</div>
					)}
				</div>
				<div className="col-md-8">
					<div className="container">
						<div className="row">
							<Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000} transitionMs={1000}>
								{destinations.map((destination) => (
									<InfoCard destination={destination} handleHover={handleHover}></InfoCard>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
