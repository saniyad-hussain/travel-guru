import React from 'react';
import './Destination.css';

const Destination = () => {
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
						<div className="col-md-4">
							<div className="card">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div class="card-body ">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
