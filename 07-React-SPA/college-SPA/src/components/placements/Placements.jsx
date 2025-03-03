import React from "react";
import "./placements.css";

const placementsData = {
  highestPackage: "₹44 LPA",
  averagePackage: "₹7.5 LPA",
  totalOffers: "500+",
  recruiters: [
    { src: "./images/at&t.jpg", alt: "AT&T" },
    { src: "./images/google.png", alt: "Google" },
    { src: "./images/amazon.png", alt: "Amazon" },
    { src: "./images/SI.jpg", alt: "SI" },
    { src: "./images/flipkart.jpg", alt: "Flipkart" },
    { src: "./images/tcs.jpg", alt: "TCS" },
    { src: "./images/infosys.png", alt: "Infosys" },
    { src: "./images/deloitte.jpg", alt: "Deloitte" },
    { src: "./images/wipro.png", alt: "Wipro" },
    { src: "./images/capgemini.png", alt: "Capgemini" },
    { src: "./images/cognizant.png", alt: "Cognizant" },
  ],
  activities: [
    "Comprehensive Aptitude and Technical Training",
    "Mock Interviews and Group Discussions",
    "Resume Building Workshops",
    "Industry Interaction and Seminars",
    "Internship Opportunities with Leading Firms",
  ],
};

const Placements = () => {
  return (
    <div className="placements">

      <main>
        <h1>Placements</h1>

        <section className="stats">
          <h2>Placement Highlights</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Highest Package</h3>
              <p>{placementsData.highestPackage}</p>
            </div>
            <div className="stat-item">
              <h3>Average Package</h3>
              <p>{placementsData.averagePackage}</p>
            </div>
            <div className="stat-item">
              <h3>Total Offers</h3>
              <p>{placementsData.totalOffers}</p>
            </div>
          </div>
        </section>

        <section className="companies">
          <h2>Our Recruiters</h2>
          <marquee direction="left" scrollAmount="10">
            <div className="marquee">
              {placementsData.recruiters.map((company, index) => (
                <img key={index} src={company.src} alt={company.alt} />
              ))}
            </div>
          </marquee>
        </section>

        <section className="activities">
          <h2>Placement Training and Activities</h2>
          <ul>
            {placementsData.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Placements;
