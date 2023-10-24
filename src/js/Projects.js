import React from 'react';
import '../css/Projects.css';

const Projects = () => {
	const projects = [
		{
			title: 'Project 1',
			description: 'Description of Project 1.',
			link: 'https://github.com/example/project1',
		},
		{
			title: 'Project 2',
			description: 'Description of Project 2.',
			link: 'https://github.com/example/project2',
		},
		{
			title: 'Project 3',
			description: 'Description of Project 2.',
			link: 'https://github.com/example/project2',
		},
		{
			title: 'Project 4',
			description: 'Description of Project 2.',
			link: 'https://github.com/example/project2',
		},
	];

	return (
		<section id="projects" className="p-3">
		<div className="container">
			<div className="display-4 text-center py-4">My Projects</div>
			<div className="row">
			{projects.map((project, index) => (
				<div className="col-md-4 mb-4" key={index}>
				<div className="card">
					<div className="card-body">
					<h5 className="card-title text-center">{project.title}</h5>
					<p className="card-description">{project.description}</p>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="card-link btn btn-primary"
					>
						View Project
					</a>
					</div>
				</div>
				</div>
			))}
			</div>
		</div>
		</section>
	);
};

export default Projects;
