import React from 'react';

const ProductInfo = ({ bundle }) => {
  return (
    <div className="px-4 md:px-8 space-y-4">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-xs">
        {bundle.breadcrumb}
      </div>
      
      {/* Title */}
      <h1 className="text-lg font-bold text-black">
        {bundle.title}
      </h1>
      
      {/* Description */}
      <p className="text-xs text-black leading-relaxed">
        {bundle.description}
      </p>
      
      {/* Select Text */}
      <div className="text-xs font-bold text-[#ed1c24]">
        {bundle.selectText}
      </div>
    </div>
  );
};

export default ProductInfo;
