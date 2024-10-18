import { useState } from "react";

const InvestmentStage = () => {
  const [selectedStage, setSelectedStage] = useState("");

  const handleStageChange = (e) => {
    setSelectedStage(e.target.value);
  };

  return (
    <div className="container ml-[-515px] p-6 w-[700px]">
      <h1 className="mediumText font-bold mb-4">
        Which stages of development do you prefer to invest in?
      </h1>

      <label className="block text-gray-700 dark:text-white font-semibold mb-2">
        Select Investment Stage
      </label>
      <div className="relative z-20">
        {" "}
        {/* Higher z-index for this dropdown */}
        <select
          value={selectedStage}
          onChange={handleStageChange}
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
        >
          <option value="" disabled>
            Select a stage
          </option>
          <option value="Seed Stage">Seed Stage</option>
          <option value="Early Stage">Early Stage</option>
          <option value="Growth Stage">Growth Stage</option>
        </select>
      </div>

      {selectedStage && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Selected Investment Stage</h2>
          <p className="mt-2">{selectedStage}</p>
        </div>
      )}
    </div>
  );
};

const Investmentapproach = () => {
  const [investmentapproach, setInvestmentapproach] = useState("");

  const handleApproachChange = (e) => {
    setInvestmentapproach(e.target.value);
  };

  return (
    <div className="container ml-[29px] p-6 w-[700px] mt-16">
      {" "}
      {/* Increased margin-top to create space */}
      <h1 className="mediumText font-bold mb-4">
        What is your preferred investment approach?
      </h1>
      <label className="block text-gray-700 font-semibold mb-2">
        Select Investment Approach <span className="text-red-500">*</span>
      </label>
      <div className="relative z-10">
        {" "}
        {/* Lower z-index compared to the dropdown above */}
        <select
          value={investmentapproach}
          onChange={handleApproachChange}
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
        >
          <option value="" disabled>
            Select an approach
          </option>
          <option value="Hands On">Hands On</option>
          <option value="Hands Off">Hands Off</option>
        </select>
      </div>
      {investmentapproach && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            Selected Investment Approach
          </h2>
          <p className="mt-2">{investmentapproach}</p>
        </div>
      )}
    </div>
  );
};

const Risktolerance = () => {
  const [risktolerance, setrisktolerance] = useState("");

  const handleApproachChange = (e) => {
    setrisktolerance(e.target.value);
  };

  return (
    <div className="container ml-[29px] p-6 w-[700px] mt-16">
      {" "}
      {/* Increased margin-top to create space */}
      <h1 className="mediumText font-bold mb-4">
        What is your risk tolerance? <span className="text-red-500">*</span>
      </h1>
      <div className="relative z-10">
        {" "}
        {/* Lower z-index compared to the dropdown above */}
        <select
          value={risktolerance}
          onChange={handleApproachChange}
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      {risktolerance && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Selected Risk tolerance</h2>
          <p className="mt-2">{risktolerance}</p>
        </div>
      )}
    </div>
  );
};

export { InvestmentStage, Investmentapproach, Risktolerance };
