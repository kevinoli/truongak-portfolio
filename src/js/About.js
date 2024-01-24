import React from 'react';
import '../css/About.css';


const About = () => {
	return (
		<div className='about'>

			<div id="text-and-photo">
				<div className="text">
					fasfdsffede
				<h1>Welcome to My World!</h1>
				<p>Hi, I'm Kevin Truong, a Vietnamese American computer science student at Colorado State University.</p>
				</div>
				<div className="photo">
					{/* Image */}
				<img src="img/kevin_alien.jpeg" alt="Kevin Truong" width="500"></img>
				</div>
				<h1>About Kevin</h1>
			</div>

			<div id="academic-career">
				<h2>Academic History and Career Goals</h2>
				<p>I began my college journey at Front Range Community College, where I earned an Associate of Science before transferring to Colorado State University to major in computer science. I've always been fascinated by computers, problem-solving, and understanding how things work.</p>
				<p>My passion lies in full-stack web and app development, machine learning concepts, and algorithmic problem-solving. My career goal is to become a software engineer or developer working on innovative and creative projects or with forward-thinking companies.</p>
			</div>
				<img src="img/kevin_alien.jpeg" alt="Kevin Truong" width="500"></img>

			<div id="hobbies-interests">
				<h2>Personal Hobbies and Interests</h2>
				<p>Born and raised in Longmont, Colorado, I have a diverse range of interests. I love music of all kinds, from country to EDM to punk rock. I'm even trying my hand at making music. As a creative individual, I enjoy drawing and painting.</p>
				<p>EDM concerts and raves are among my favorite activities. I have a passion for thrift shopping and fashion. Electronics also intrigue me, and I love working with microcontrollers and tinkering with electronic components. Creativity, acceptance, tolerance, and patience define my approach to life.</p>
			</div>
		</div>
	
	);
};

export default About;
