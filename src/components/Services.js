import React from 'react';
import '../styles/Services.css';
// import { data } from '../constants'

const Services = () => {
  const services = [
    {
      title: "Talent Acquisition",
      description: "We help you find the right talent to match your organizational needs."
    },
    {
      title: "HR Consulting",
      description: "Get expert advice on HR strategies to improve team productivity and satisfaction."
    },
    {
      title: "Training & Development",
      description: "Upskill your workforce with our tailor-made training programs."
    },
  ]
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
          {services.map((service,index) => (
              <div className="service-item" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            )
          )}
          
      </div>
    </section>
  );
}

export default Services;
