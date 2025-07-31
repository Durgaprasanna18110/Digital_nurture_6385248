// src/OfficeList.js
import React from 'react';

const offices = [
  {
    name: "Tech Park",
    rent: 75000,
    address: "HSR Layout, Bangalore",
    image: "/download.jpeg"
  },
  {
    name: "Smart Hub",
    rent: 55000,
    address: "Kondapur, Hyderabad",
    image: "/images.jpeg"
  },
  {
    name: "WorkSpace Pro",
    rent: 62000,
    address: "T Nagar, Chennai",
    image: "/maxresdefault.jpg"
  }
];

const OfficeList = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Office Space Rental Listings</h1>

      {/* Flex container to align all cards in row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {offices.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '300px',
              textAlign: 'center',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
            }}>
              <img src={office.image} alt={office.name} width="100%" height="200px" style={{ objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{office.name}</h3>
              <p style={rentStyle}>Rent: ₹{office.rent}</p>
              <p>Address: {office.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeList;
