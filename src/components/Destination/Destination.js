import React, { useState } from 'react';
import './Destination.css';
import fakeData from '../../fakeData/fakeData';
import InfoCard from '../InfoCard/InfoCard';

const Destination = () => {
	const destinationInfo = fakeData;
	const [destinations, setDestinations] = useState(destinationInfo);
	return (
		<div className="container destination ">
			<div className="row">
				<div className="col-md-4">
					<div className="info">
						<h1>CoxBazar</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo ipsa earum numquam harum obcaecati, odio eveniet vitae explicabo
							asperiores voluptas iure dolore illum molestias debitis, deleniti, aut in est.
						</p>
					</div>
				</div>
				<div className="col-md-8">
					<div className="row">
						{destinations.map((destination) => (
							<InfoCard destination={destination}></InfoCard>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
