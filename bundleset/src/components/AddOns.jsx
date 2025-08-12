import React, { useState, useEffect } from "react";
import { Select as HeroSelect, SelectItem } from "@heroui/select";
import { motion } from "framer-motion";

const AddOns = ({ addOns: initialAddOns, onSelectionChange }) => {
  const [addOns, setAddOns] = useState(initialAddOns);
  const [expandedAddOns, setExpandedAddOns] = useState({});

  const toggleAddOn = (id) => {
    setAddOns((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon
      )
    );
    setExpandedAddOns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSizeChange = (id, size) => {
    setAddOns((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selectedSize: size } : addon
      )
    );
  };

  const handleAssistantQtyChange = (id, qty) => {
    setAddOns((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, qty } : addon
      )
    );
  };

  // ✅ Send selected items with price to parent whenever addOns changes
  useEffect(() => {
    if (typeof onSelectionChange === "function") {
      const selectedItems = [];

      addOns.forEach((addon) => {
        if (addon.selected) {
          selectedItems.push({
            id: addon.id,
            name: addon.name,
            price: addon.price || 0,
            qty: addon.qty || 1
          });
        }

        if (addon.variants) {
          addon.variants.forEach((variant) => {
            if (variant.selected) {
              selectedItems.push({
                id: variant.id,
                name: variant.name,
                price: variant.rentalPrice || 0,
                qty: variant.qty || 1
              });
            }
          });
        }
      });

      onSelectionChange(selectedItems);
    }
  }, [addOns, onSelectionChange]);

  return (
    <div className="space-y-4">
      {addOns.map((addon) => (
        <div
          key={addon.id}
          className={`border rounded p-4 ${addon.selected ? 'border-[#3e58a4]' : 'border-gray-300'}`}
        >
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={addon.selected}
              onChange={() => toggleAddOn(addon.id)}
              className="mr-2 accent-[#3e58a4]"
            />
            <span className="font-medium">{addon.name}</span>
          </label>

          {expandedAddOns[addon.id] && (
            <div className="mt-3 text-sm text-gray-700">
              {addon.desc && (
                <p className="italic text-xs text-[#ed1c24] mb-2">{addon.desc}</p>
              )}

              {/* Mat Type */}
              {addon.type === 'mat' && (
                <div className="flex gap-4 items-start">
                  <img
                    src={addon.img}
                    alt={addon.name}
                    className="w-[100px] h-[100px] object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-800 mb-1">
                      Price: <strong className="text-[#3e58a4]">{addon.price}</strong>
                    </p>
                    <label className="text-xs text-gray-700 font-medium mr-2">Select Size:</label>
                    <select 
                      value={addon.selectedSize || ''}
                      onChange={(e) => handleSizeChange(addon.id, e.target.value)}
                      className=" text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3e58a4]"
                    >
                      <option value="">-- Choose --</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Kids Sitting */}
              {addon.type === 'kids_sitting' &&
                addon.variants?.map((item, idx) => (
                  <div
                    key={item.id}
                    className="relative border border-gray-200 rounded p-3 mt-3"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[100px] h-[100px] object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-black">{item.name}</h3>
                        <p className="text-xs text-gray-600 mt-1">Dimension: {item.dimension}</p>
                        <div className="flex justify-between items-center mt-2">
                          <div>
                            <div className="text-xs text-gray-500">Market Price</div>
                            <div className="line-through text-xs text-gray-400">{item.marketPrice}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Rental Price</div>
                            <div className="text-xs font-bold text-[#3e58a4]">{item.rentalPrice}</div>
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-2 items-center mt-2">
                            {/* ✅ HeroUI Qty Dropdown */}
                            <div className="flex-1">
                              <HeroSelect
                                size="m"
                                aria-label="Quantity"
                                placeholder="Quantity"
                                selectedKeys={item.qty ? [String(item.qty)] : []}
                                onSelectionChange={(keys) => {
                                  const k = Array.from(keys)[0];
                                  const qty = k ? parseInt(k, 10) : undefined;
                                  setAddOns((prev) =>
                                    prev.map((a) =>
                                      a.id === addon.id
                                        ? {
                                            ...a,
                                            variants: a.variants.map((v, i) =>
                                              i === idx ? { ...v, qty } : v
                                            ),
                                          }
                                        : a
                                    )
                                  );
                                }}
                                className="w-full h-9 flex items-center justify-center gap-2.5 px-4 py-1.5 
                                  rounded-[13px] border-[3px] border-solid border-gray-300 transition-all duration-200 bg-white"
                              >
                                <SelectItem disabledKeys={['placeholder']} className="text-center">Quantity</SelectItem>
                                {[1, 2, 3, 4, 5].map((q) => (
                                  <SelectItem key={String(q)} className="w-[100px] bg-white rounded-[13px] border-bottom-[3px] border-solid border-gray-300 text-center">{`${q}`}</SelectItem>
                                ))}
                              </HeroSelect>
                            </div>

                            {/* ✅ HeroUI Select Button */}
                            <div className="flex-1">
                              <button
                                onClick={() => {
                                  setAddOns((prev) =>
                                    prev.map((a) =>
                                      a.id === addon.id
                                        ? {
                                            ...a,
                                            variants: a.variants.map((v, i) =>
                                              i === idx ? { ...v, selected: !v.selected } : v
                                            ),
                                          }
                                        : a
                                    )
                                  );
                                }}
                                className={`w-full h-9 flex items-center justify-center gap-2.5 px-3 py-1.5 
                                  rounded-[13px] border-[3px] border-solid transition-all duration-200
                                  ${
                                    item.selected
                                      ? "bg-[#ed1c24] text-white border-[#c30010]"
                                      : "bg-white text-[#ed1c24] border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white hover:border-[#c30010]"
                                  }`}
                              >
                                {item.selected ? "Select" : "Select"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Assistant Add-On */}
              {addon.type === 'assistant' && (
                <div className="relative border border-gray-200 rounded p-3 mt-3">
                  <div className="flex gap-4 items-start">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className="w-[100px] h-[100px] object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">One assistant will stay full-time during the event.</p>
                      <p className="text-xs text-gray-500 mb-2">They'll help with guiding kids, ensuring safety and keeping play area organized.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddOns;
