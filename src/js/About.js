import React from 'react';

const About = () => {
	return (
	<section id="about" className="py-5">
		<div className="container">
		<div className="row">
			<div className="col-md-6">
			<h2>About Me</h2>
			<p>
				Write a brief introduction about yourself here. Mention your skills, interests, and any other relevant information.
			</p>
			</div>
			<div className="col-md-6">
			{/* You can add an image of yourself here */}
			<img src="img/kevin_alien.jpeg" alt="Your Name" className="img-fluid" />
			</div>
		</div>
		</div>
	</section>
	);
};

export default About;
