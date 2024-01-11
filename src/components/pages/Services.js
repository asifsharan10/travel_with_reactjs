// Services.js

import React from 'react';
import '../../App.css';
import './Services.css';

const servicesData = [
  { id: 1, title: 'Flight Booking', description: 'Book your flights with ease.' },
  { id: 2, title: 'Hotel Reservations', description: 'Find the perfect place to stay.' },
  { id: 3, title: 'Car Rentals', description: 'Rent a car for your convenience.' },
  // Add more services as needed
];

export default function Services() {
  return (
    <div className='services-container'>
      <h1 className='services-title'>Our Services</h1>
      <div className='services-list'>
        {servicesData.map(service => (
          <div key={service.id} className='service-card'>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
