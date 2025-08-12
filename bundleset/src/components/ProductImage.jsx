import React from 'react';

const ProductImage = ({ bundle }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square bg-cover bg-center rounded-lg overflow-hidden"
         style={{ backgroundImage: `url(${bundle.mainImage})` }}>
      
      {/* Premium Badge */}
      {bundle.isPremium && (
        <div className="absolute top-2 left-4 bg-[#3e58a4] rounded-full px-3 py-1 flex items-center gap-2">
          <img
            className="w-2.5 h-3"
            alt="Premium"
            src="https://c.animaapp.com/mdx14mntBIEjrg/img/layer-1-2.svg"
          />
          <span className="text-white text-xs font-normal">
            {bundle.premiumLabel}
          </span>
        </div>
      )}
      
      {/* Favorite Button */}
      <div className="absolute top-0 right-0 w-9 h-14 bg-cover bg-center"
           style={{ backgroundImage: 'url(https://c.animaapp.com/mdx14mntBIEjrg/img/vector-27.svg)' }}>
        <img
          className="absolute top-1 left-1 w-6 h-8"
          alt="Favorite"
          src="https://c.animaapp.com/mdx14mntBIEjrg/img/layer-1-1.svg"
        />
      </div>
    </div>
  );
};

export default ProductImage;
