import React from 'react';
const Home = () => {
    return (
        <main>
            <section className="welcome">
                <h2>Welcome to PVPSIT</h2>
                <div className="welcome-container">
                    <img src="/images/download.jpg" alt="College Image" className="college-img" />
                    <p>
                        Your gateway to excellence in education and career development. Explore our state-of-the-art facilities, industry-aligned programs, and a vibrant student life. Together, let us shape a brighter future.
                    </p>
                </div>
            </section>

            <section className="stats">
                <h3>Our Achievements</h3>
                <div className="stats-container">
                    <div className="stat">
                        <h4>500+</h4>
                        <p>Placements Every Year</p>
                    </div>
                    <div className="stat">
                        <h4>20+</h4>
                        <p>Academic Programs</p>
                    </div>
                    <div className="stat">
                        <h4>100+</h4>
                        <p>Industry Collaborations</p>
                    </div>
                </div>
            </section>

            <section className="cards">
                <div className="card-container">
                    <div className="card">
                        <img src="/images/principla.jpg" alt="Principal Image" className="card-img" />
                        <h4>Principal</h4>
                        <p>Dr. Shivaji Babu <br />Leading PVPSIT with a vision for excellence in education and innovation.</p>
                    </div>
                    <div className="card">
                        <img src="/images/naac.jpg" alt="NAAC Accreditation" className="card-img" />
                        <h4>NAAC Accreditation</h4>
                        <p>PVPSIT is accredited with an A+ grade by NAAC, reflecting our commitment to quality education.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;