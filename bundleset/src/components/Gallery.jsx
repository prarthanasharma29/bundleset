import React from 'react';

const Gallery = ({ gallery }) => {
  return (
    <div className="px-4 md:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="relative inline-block">
          <h2 className="text-base font-bold text-black">
            {gallery.title}
          </h2>
          <img
            className="absolute -top-2 -right-8 w-7 h-6"
            alt="Decoration"
            src="https://c.animaapp.com/mdx14mntBIEjrg/img/splatter-02-3.png"
          />
        </div>
        <p className="text-xs text-black text-center mt-2">
          {gallery.subtitle}
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {gallery.images.map((image, index) => (
          <div key={index} className="aspect-square">
            <img
              className="w-full h-full object-cover rounded-lg"
              alt={`Gallery ${index + 1}`}
              src={image}
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-base font-semibold text-[#3e58a4]">
          Show more
        </span>
        <div className="transform -rotate-45">
          <img
            className="w-6 h-6 transform rotate-45"
            alt="Arrow"
            src="https://c.animaapp.com/mdx14mntBIEjrg/img/icon-outline-arrow-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
