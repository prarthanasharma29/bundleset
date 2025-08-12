import React from 'react';

const InfoSection = ({ section }) => {
  return (
    <div className="px-4 md:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h2 className="text-base font-bold text-black">
            {section.title}
          </h2>
          <img
            className="absolute -top-2 -right-6 w-6 h-5"
            alt="Decoration"
            src="https://c.animaapp.com/mdx14mntBIEjrg/img/splatter-02-3.png"
          />
        </div>
        <p className="text-sm font-semibold text-black mt-4">
          {section.subtitle}
        </p>
      </div>

      {/* Info Items */}
      <div className="space-y-8">
        {section.items.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                className="w-32 h-32 rounded-lg object-cover"
                alt={item.title}
                src={item.image}
              />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xs font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs text-black leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
