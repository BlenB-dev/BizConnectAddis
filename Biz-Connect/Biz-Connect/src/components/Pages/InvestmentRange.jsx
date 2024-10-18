import { useState } from 'react';

export default function InvestmentRange() {
  const [minValue, setMinValue] = useState(100000); // Default minimum value
  const [maxValue, setMaxValue] = useState(1000000); // Default maximum value

  const handleMinChange = (e) => {
    setMinValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxValue(parseInt(e.target.value));
  };

  return (
    <div className="container ml-[-515px] p-6 w-[600px]">
      <h1 className="mediumText font-bold mb-6">What is your typical investment range?   <span className="text-red-500">*</span></h1>

      {/* Slider Controls */}
      <div className="mb-4">
        <label className="block dark:text-white text-gray-700 font-semibold mb-2">Minimum Investment (ETB)</label>
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="100000"
          max="1000000"
        />
      </div>

      <div className="mb-4">
        <label className="block  dark:text-white text-gray-700 font-semibold mb-2">Maximum Investment (ETB)</label>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="100000"
          max="1000000"
        />
      </div>

      {/* Range Slider */}
      <div className="mb-6">
        <label className="block dark:text-white font-semibold mb-2">Adjust Range (100,000 ETB - 1,000,000 ETB)</label>
        <div className="flex space-x-4">
          <input
            type="range"
            min="100000"
            max="1000000"
            value={minValue}
            onChange={handleMinChange}
            className="w-full"
          />
          <input
            type="range"
            min="100000"
            max="1000000"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full"
          />
        </div>
      </div>

    
    </div>
  );
}
