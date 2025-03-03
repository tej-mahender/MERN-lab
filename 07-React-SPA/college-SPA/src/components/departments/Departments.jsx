import React from "react";
import { Link } from "react-router-dom";
import "./departments.css";

const departments = [
  { img: "./images/cse.jpg", title: "B.Tech - CSE", name: "Department of Computer Science and Engineering" },
  { img: "./images/aiml.jpg", title: "B.Tech - CSE", subtitle: "(Artificial Intelligence & Machine Learning)", name: "Department of Computer Science and Engineering" },
  { img: "./images/DS.jpg", title: "B.Tech - CSE", subtitle: "(Data Science)", name: "Department of Computer Science and Engineering" },
  { img: "./images/IT.jpg", title: "B.Tech - IT", name: "Department of Information Technology" },
  { img: "./images/ECE.jpg", title: "B.Tech - ECE", name: "Department of Electronics and Communication Engineering" },
  { img: "./images/EEE.jpg", title: "B.Tech - ECE", name: "Department of Electronics and Communication Engineering" },
  { img: "./images/ME.jpeg", title: "B.Tech - ME", name: "Department of Mechanical Engineering" },
  { img: "./images/CE.jpg", title: "B.Tech - CE", name: "Department of Civil Engineering" },
  { img: "./images/machineDesign.jpg", title: "M.Tech", subtitle: "Machine Design", name: "Department of Mechanical Engineering" },
  { img: "./images/microwave.jpg", title: "M.Tech", subtitle: "Microwave & Communication Engineering", name: "Department of ECE" },
  { img: "./images/mba.jpeg", title: "MBA", name: "Department of Business Administration" },
];

const Departments = () => {
  return (
    <div>
      <section className="department-cards">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <img src={dept.img} alt={dept.title} className="department-image" />
            <h2>{dept.title}</h2>
            {dept.subtitle && <h4>{dept.subtitle}</h4>}
            <h3 className="department-name">{dept.name}</h3>
            <div className="card-footer">
              <Link to="/contact" className="contact-link">Contact</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Departments;
