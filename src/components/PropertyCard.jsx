import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  email,
  type,
  city,
  onSaveProperty,
  userID,
}) => (
  <div className="PropertyCard">
    <div className="graphic">
      <i className="fab fa-fort-awesome" />
    </div>
    <div className="detail">
      <strong>{title}</strong>
    </div>
    <div className="detail">
      <em>{type} - {city}</em>
    </div>
    <div className="detail">
      <i className="fas fa-bath" /> {bathrooms}
    </div>
    <div className="detail">
      <i className="fas fa-bed" /> {bedrooms}
    </div>
    <div className="detail">
      <i className="fas fa-pound-sign" /> {price}
    </div>
    <a href={`mailto:${email}`} className="email"><i className="fas fa-envelope" /> Email</a>
    {userID && (
      <a
        href="#"
        onClick={() => onSaveProperty(_id)}
        className="save"
      >
        <i className="fas fa-star" /> Save
      </a>
    )}
  </div>
);

export default PropertyCard;
