import React from 'react';
import "../css/Resume.css"
import { Container, Row, Col } from 'reactstrap';

const Resume = () => {
	return (

    <section id="resume" className="">
        <div className="container">
            <br></br>
            <h1 className='text-center'>Kevin Truong</h1>
            <p className='text-center'>
                Fort Collins, CO | +1 (720)-224-6183 | truongakevin@gmail.com | <a href="https://github.com/kevinoli" target="_blank" rel="noopener noreferrer"> <img width="25" height="25" alt="GitHub Logomark" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" style={{ filter: 'invert(1)' }} /></a> kevinoli </p>
            <br></br>
            <h2>Education/Certificates</h2>
            <hr></hr>
            <Container>
            <Row>
                <Col className=''>
                <h4><strong>Colorado State University, Fort Collins, CO</strong></h4>
                </Col>
                <Col className='text-end'>
                <h5><span>August 2022 - Expected August 2024</span></h5>
                </Col>
            </Row>
            <Row>
                <h5>Bachelor of Science, Major in Computer Science, GPA: 3.029</h5>
            </Row>
            <Row>
                <h6>Relevant Coursework: Algorithms, Software Development, Operating Systems, Web Application Development, Software Engineering, Computer Networking, Machine Learning, Database Management</h6>
            </Row>
            <br></br>
            <Row>
                <Col className=''>
                <h4><strong>Front Range Community College, Longmont, CO</strong></h4>
                </Col>
                <Col className='text-end'>
                <h5><span>August 2019 - August 2022</span></h5>
                </Col>
            </Row>
            <Row>
                <h5>Associate of Science, Major in Computer Science, GPA: 3.20</h5>
            </Row>
            <Row>
                <h6>Relevant Coursework: Data Structures, Computer Architecture, Discrete Structures</h6>
            </Row>
            <br></br>
            <Row>
                <Col className=''>
                <h4><strong>CompTIA Security+ Certification</strong></h4>
                </Col>
                <Col className='text-end'>
                <h5><span>Issued December 2023</span></h5>
                </Col>
            </Row>
            <Row>
                <h5>Bachelor of Science, Major in Computer Science, GPA: 3.029</h5>
            </Row>
            <Row>
                <h6>Relevant Skills: Independent Learning , Cybersecurity Concepts, Threat Mitigation, Security Architecture</h6>
            </Row>
            </Container>
                <br></br>
                <h2>Projects</h2>
                <hr></hr>
            <div className='ps-3'>
                <h4>Full Stack Trip Planner</h4>
                <ul>
                    <li>Collaborated in a team using Agile and Scrum software development principles and utilizing tools such as Docker, Git, GitHub, Postman, Zenhub, and Code Climate.</li>
                    <li>Implemented features in a trip planner application, utilizing technologies such as Jest, Reactstrap, and Javascript to design the frontend and JUnit, Java, SQL, and MariaDB to construct a robust backend API.</li>
                </ul>
                <br></br>

                <h4>Spotify Music Recommendation Generator</h4>
                <ul>
                    <li>Analyzed musical data utilizing machine learning techniques and clustering algorithms (K-Means, Agglomerative Clustering) to group and generate personalized music recommendations.</li>
                    <li>Implemented data collection from Spotify using its web API to create a tailored dataset of audio features to provide comprehensive exploration of music data.</li>
                </ul>
                <br></br>

                <h4>Personal Portfolio Website</h4>
                <ul>
                    <li>Crafted and designed a personal portfolio website with a front-end developed using React, CSS, and JavaScript.</li>
                    <li>Utilized Google Cloud Run and Docker with Nginx configurations for continuous deployment from a GitHub repository to a website hosted through Cloudflare with custom DNS record management.</li>
                </ul>
                <br></br>

                <h4>Central Processing Unit Emulator</h4>
                <ul>
                    <li>Developed a 16-bit CPU emulation project, including instruction set design, memory manipulation, stack and register operations, implementation of an assembler to compile assembly code into machine code, and a virtual environment for binary code execution.</li>
                </ul>
                <br></br>

                <h4>Arduino Water Level Timer Tracker</h4>
                <ul>
                    <li>Engineered Arduino-based device for real-time liquid level tracking, incorporating a self-made capacitance sensor, RGB LED screen, and a timer.</li>
                    <li>Applied principles from both computer science and electrical engineering to combine electronic components and hardware with computer data structures and algorithms to develop an efficient and cohesive device.</li>
                </ul>
                <br></br>

            </div>
            <Container>
                <Row>
                    <Col style={{ maxHeight: '20px' }}>
                        <h2>Skills</h2>
                    </Col>
                    <Col className='text-end mt-3'>
                        <h6 className='mb-0' >* Proficiency</h6>
                    </Col>
                </Row>
            </Container>
            <hr></hr>

            <div className='ps-3'>
            <h4>Languages:</h4>
            <p>C, * C++, * Python, Java, * Javascript, * SQL, PHP, * HTML, * CSS, Arduino, Assembly, * Bash</p>

            <h4>Technologies/Tools:</h4>
            <p>MySQL, Code Climate, Zenhub, SQLite, MariaDB, Google Cloud Platform, Docker, Git, GitHub, JUnit, Postman, Fuel PHP, React, Reactstrap, Node.js, Scikit-Learn</p>

            <h4>Soft Skills:</h4>
            <p>Problem Solving, Creativity, Organization, Collaboration, Patience, Leadership</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center' ><a className='text-decoration-none' href="resume.pdf" target="_blank" style={{ color: '#ffffff'}}>Download PDF version of my resume</a></h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </section>

	);
};

export default Resume;
