import React, { useState } from 'react';

const ItemsList = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
const [selectedItems, setSelectedItems] = useState({});
const toggleSelect = (index) => {
  setSelectedItems((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};



  const productData = {
    img:'../../../public/img/slide.png',
    name: "Senior Slide",
    note: "Click to go on product page",
    dimension: "147.3cm x 47cm x 91.4cm",
    price: "₹690",
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 space-y-1">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <div 
            className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleExpand(index)}
          >
            <span className="text-sm font-semibold text-gray-600 font-poppins flex-1">
              {item.name}
            </span>
            <img
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedItems[index] ? 'rotate-180' : ''
              }`}
              alt="Expand"
              src="https://c.animaapp.com/mdx14mntBIEjrg/img/down-arrow-33.png"
            />
          </div>
          
          {/* Expanded Content */}
          {expandedItems[index] && (
            <div className="pb-3 pl-4 text-xs text-gray-500 font-poppins">
              <p>Details about {item.name} - Premium quality equipment with safety features and age-appropriate design.

                    <article className="relative w-[358px] h-[198px]">
      <img
        className="absolute w-[158px] h-[158px] top-[27px] left-[7px] object-cover"
        alt="Senior Slide product image"
        src={productData.img}
      />

      <div className="absolute top-[30px] left-[177px]">
        <h2 className="w-28 [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal] underline whitespace-nowrap">
          {productData.name}
        </h2>
        <p className="w-[150px] mt-[6px] [font-family:'Poppins-Italic',Helvetica] font-normal italic text-[#ed1c24] text-[10px] tracking-[0] leading-[14.9px] whitespace-nowrap">
          {productData.note}
        </p>
      </div>

      <div className="absolute top-[69px] left-[177px]">
        <h3 className="w-[86px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-[normal]">
          Dimension:
        </h3>
        <p className="w-[152px] mt-[4px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[17.9px] whitespace-nowrap">
          {productData.dimension}
        </p>
      </div>

      <div className="absolute top-[143px] left-[177px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#3e58a4] text-xs tracking-[0] leading-[normal]">
        {productData.price}
      </div>

      <button
  type="button"
  onClick={() => toggleSelect(index)}
  className={`flex w-[84px] h-9 items-center justify-center gap-2.5 px-3 py-1.5 
              absolute top-[135px] left-[253px] rounded-[13px] border-[3px] border-solid 
              transition-all duration-200
              ${
                selectedItems[index]
                  ? 'bg-[#ed1c24] text-white border-[#c30010]'
                  : 'bg-white text-[#ed1c24] border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white hover:border-[#c30010]'
              }`}
  aria-label="Select product"
>
  <span className="relative w-fit mt-[-5.00px] whitespace-nowrap font-bold text-xs tracking-[0] leading-7">
    Select
  </span>
</button>

    </article>

              </p>
              
           
            </div>
          )}
        </div>
      ))}
    </div>  
  );
};

export default ItemsList;
