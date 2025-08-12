import React, { useState } from 'react';

const BookingForm = ({ formFields, bundle }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', { bundle, formData });
    // Add to cart logic here
  };

  return (
    <div className="px-4 md:px-8 space-y-4">
      {/* Form Fields */}
      {formFields.map((field) => (
        <div key={field.id} className="relative">
          {field.type === 'textarea' ? (
            <div className="relative">
              <textarea
                placeholder={field.label}
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full h-16 px-3 py-2 border border-gray-400 rounded-md text-xs font-semibold text-gray-600 resize-none"
              />
              {field.optional && (
                <span className="absolute bottom-2 right-3 text-xs italic text-[#ed1c24]">
                  Optional
                </span>
              )}
            </div>
          ) : (
            <div className="relative">
              <select
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full h-8 px-3 border border-gray-400 rounded-md text-xs font-semibold text-gray-600 appearance-none bg-white"
              >
                <option value="">{field.label}</option>
                {/* Add options based on field type */}
              </select>
              <img
                className="absolute right-3 top-2 w-4 h-4 pointer-events-none"
                alt="Dropdown"
                src="https://c.animaapp.com/mdx14mntBIEjrg/img/down-arrow-33.png"
              />
            </div>
          )}
        </div>
      ))}

      {/* Secret Discount */}
      <p className="text-xs italic text-[#ed1c24] leading-tight">
        {bundle.secretDiscount}
      </p>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between pt-4">
        <div className="text-sm font-semibold text-[#3e58a4]">
          {bundle.currency}{bundle.price}
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-[#ed1c24] text-white px-6 py-2 rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
