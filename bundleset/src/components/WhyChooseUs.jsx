import React from 'react';

const WhyChooseUs = ({ whyChooseUs }) => {
  return (
    <div className="px-4 md:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h2 className="text-sm font-bold text-black">
            {whyChooseUs.title}
          </h2>
          <img
            className="absolute -top-2 -right-6 w-6 h-5"
            alt="Decoration"
            src="https://c.animaapp.com/mdx14mntBIEjrg/img/splatter-02-3.png"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-4">
        {whyChooseUs.features.map((feature, index) => (
          <div
            key={index}
            className="aspect-square flex flex-col items-center justify-center p-4 text-center"
            style={{ backgroundColor: feature.bgColor }}
          >
            <img
              className="w-12 h-12 mb-4 object-contain"
              alt={feature.title}
              src={feature.icon}
            />
            <h3
              className={`text-xs font-bold leading-tight ${
                feature.textColor === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
