import React from 'react';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import ItemsList from './components/ItemsList';
import AddOns from './components/AddOns';
import BookingForm from './components/BookingForm';
import InfoSection from './components/InfoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import bundleData from './data/bundleData.json';

const App = () => {
  const { bundle, infoSections, whyChooseUs, gallery } = bundleData;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white shadow-lg">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div className="space-y-6">
          {/* Product Image */}
          <div className="px-4 md:px-8 pt-4">
            <ProductImage bundle={bundle} />
          </div>
          
          {/* Product Info */}
          <ProductInfo bundle={bundle} />
          
          {/* Items List */}
          <ItemsList items={bundle.items} />
          
          {/* Add-ons */}
          <AddOns addOns={bundle.addOns} />
          
          {/* Booking Form */}
          <BookingForm formFields={bundle.formFields} bundle={bundle} />
          
          {/* Info Sections */}
          {infoSections.map((section, index) => (
            <InfoSection key={index} section={section} />
          ))}
          
          {/* Why Choose Us */}
          <WhyChooseUs whyChooseUs={whyChooseUs} />
          
          {/* Gallery */}
          <Gallery gallery={gallery} />
        </div>
      </div>
    </div>
  );
};

export default App;
