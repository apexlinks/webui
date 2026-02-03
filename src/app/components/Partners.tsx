import React from 'react';
import './Partners.css'; // We will create this next

// Placeholder images - Replace these with your actual imported images later
// import logo1 from '../assets/partner1.png'; 

const Partners: React.FC = () => {
  // You can easily manage your partners list here
  const partners = [
    { name: "Partner 1", logo: "https://placehold.co/150x50?text=Partner+1" },
    { name: "Partner 2", logo: "https://placehold.co/150x50?text=Partner+2" },
    { name: "Partner 3", logo: "https://placehold.co/150x50?text=Partner+3" },
    { name: "Partner 4", logo: "https://placehold.co/150x50?text=Partner+4" },
    { name: "Partner 5", logo: "https://placehold.co/150x50?text=Partner+5" },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2>Trusted By Industry Leaders</h2>
          <p>Powering growth with world-class partners</p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
