import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
	const { name, image, id } = props.destination;
	console.log(props);
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundColor: 'transparent',
		borderRadius: '10px',
		border: '1px solid #fff',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};
	return (
		<div className="col-md-4">
			<div className="card" style={styles}>
				<div class="card-body"></div>
				<div className="card-footer">
					<Link to={`/destination/${id}`}>
						<h3>{name}</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
