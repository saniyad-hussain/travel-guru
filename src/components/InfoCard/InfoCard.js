import React from 'react';

const InfoCard = (props) => {
	const { name, description, image } = props.destination;
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
					<h3>{name}</h3>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
