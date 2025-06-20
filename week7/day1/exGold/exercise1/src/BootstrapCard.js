import React from 'react';

const BootstrapCard = ({ title, imageUrl, buttonLabel, buttonUrl, description }) => {
  return (
    <div className="card m-5" style={{ width: '30rem' }}>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body text-center"> 
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-center">
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BootstrapCard;
