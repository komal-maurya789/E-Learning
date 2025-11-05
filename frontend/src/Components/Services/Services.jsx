import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'HTML',
      description: 'Learn modern web development with HTML, CSS, JavaScript, and React',
      img: '/images/8242997.png'
    },
    {
      title: 'CSS',
      description: 'Create mobile applications for iOS and Android',
      img: 'icon-html-code-7'
    },
    {
      title: 'JAVASCRIPT',
      description: 'Master data analysis, machine learning, and statistics',
      img: 'icon-html-code-7'
    }
  ];

  return (
    <div className="services">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.img} alt="" className="service-icon" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Services;