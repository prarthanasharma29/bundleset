// BundlePage.jsx
import { useState } from "react";
import AddOns from "../components/AddOns";
import ItemsList from "../components/ItemsList";
import BundlesDetails from "./BundlesDetails";
import bundleData from "../data/bundleData.json";

export const BundlePage = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddOnsChange = (addons) => {
    setSelectedAddOns(addons);
  };

  const handleItemsChange = (items) => {
    setSelectedItems(items);
  };

  const totalPrice = [...selectedAddOns, ...selectedItems].reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0),
    0
  );

  return (
    <div>
      <AddOns addOns={bundleData.addOns} onSelectionChange={handleAddOnsChange} />
      <ItemsList items={bundleData.items} onSelectionChange={handleItemsChange} />
      <BundlesDetails totalPrice={totalPrice} />
    </div>
  );
};
