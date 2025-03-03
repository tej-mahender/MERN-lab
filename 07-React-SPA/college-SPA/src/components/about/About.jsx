import React from 'react';
import './About.css'
const About = () => {
    return (
        <main className="about">
            <section className="mission-vision">
                <h2>Our Mission</h2>
                <p>To create an environment conducive to excellence in teaching and research, producing globally competent and socially responsible professionals.</p>
                <h2>Our Vision</h2>
                <p>To become a premier institution recognized for excellence in academics, research, and innovation.</p>
            </section>

            <section className="facilities">
                <h2>Facilities at PVPSIT</h2>
                <div className="facility-grid">
                    <div className="facility-item">
                        <img src="/images/library.jpg" alt="Library" className="facility-img" />
                        <h3>Library</h3>
                        <p>A state-of-the-art library with a vast collection of books, journals, and digital resources.</p>
                    </div>
                    <div className="facility-item">
                        <img src="/images/classroom.jpg" alt="Classrooms" className="facility-img" />
                        <h3>Classrooms</h3>
                        <p>Spacious, well-ventilated classrooms equipped with modern teaching aids.</p>
                    </div>
                    <div className="facility-item">
                        <img src="/images/labs.jpg" alt="Labs" className="facility-img" />
                        <h3>Labs</h3>
                        <p>Advanced laboratories offering hands-on experience across various disciplines.</p>
                    </div>
                    <div className="facility-item">
                        <img src="/images/ground.jpg" alt="Playground" className="facility-img" />
                        <h3>Playground</h3>
                        <p>Extensive sports facilities including a well-maintained playground and courts.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;