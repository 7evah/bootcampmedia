import React from 'react';

const InfoCard = ({ icon, title, text }) => (
  <section className="text-center py-5">
    <i className={`fas fa-${icon} fa-5x text-danger mb-4`}></i>
    <div className="container">
      <h3 className="fw-bold">{title}</h3>
      <p className="px-4">{text}</p>
    </div>
  </section>
);

export default InfoCard;
