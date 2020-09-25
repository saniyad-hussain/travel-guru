import React from 'react';
import { Link } from 'react-router-dom';
const InfoCard = (props) => {
	console.log(props);
	const { name, image, id } = props.destination;

	return (
		<div className="card" onMouseOver={() => props.handleHover(id)}>
			<img src={image} alt="" />
			<div className="card-text">
				<Link to={`/destination/${id}`}>
					<h3>{name}</h3>
				</Link>
			</div>
		</div>
	);
};

export default InfoCard;
