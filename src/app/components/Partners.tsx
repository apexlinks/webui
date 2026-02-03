import React from 'react';

const Partners = () => {
  // Replace with your real partner logos later
  const partners = [
    { name: "Partner 1", logo: "https://placehold.co/200x80/000000/FFFFFF/png?text=Logo+1" },
    { name: "Partner 2", logo: "https://placehold.co/200x80/000000/FFFFFF/png?text=Logo+2" },
    { name: "Partner 3", logo: "https://placehold.co/200x80/000000/FFFFFF/png?text=Logo+3" },
    { name: "Partner 4", logo: "https://placehold.co/200x80/000000/FFFFFF/png?text=Logo+4" },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="group transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
