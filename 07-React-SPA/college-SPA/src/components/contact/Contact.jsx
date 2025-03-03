import React from "react";
import './Contact.css'
const Contact = () => {
  const contacts = [
    {
      name: "Dr. Shivaji Babu",
      role: "Principal",
      email: "principal@college.edu",
      phone: "+1 (123) 456-7890",
      address: "123 College St, City, Country",
    },
    {
      name: "Ms. Jane Smith",
      role: "Registrar",
      email: "registrar@college.edu",
      phone: "+1 (123) 987-6543",
      address: "123 College St, City, Country",
    },
    {
      name: "Administrative Office",
      role: "",
      email: "admin@college.edu",
      phone: "+1 (123) 555-1234",
      address: "123 College St, City, Country",
    },
  ];

  return (
    <div className="contact-page">

      <section className="contact-info">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <h2>{contact.name}</h2>
            {contact.role && <p><strong>{contact.role}</strong></p>}
            <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
          </div>
        ))}
      </section>

      <section className="contact-form">
        <h2>Get In Touch</h2>
        <form action="mailto:info@college.edu" method="post" enctype="text/plain">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
