import React, { useState } from "react";

const JoinOption = ({
  selectedUserType,
  handleUserTypeSelect,
  handleContinue,
  closeJoinModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
        <button
          onClick={closeJoinModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-black text-center">
          How will you use Biz-Connect today?
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => handleUserTypeSelect("Startups")}
            className={`w-full p-4 border rounded-lg flex items-start space-x-3 hover:bg-gray-100 ${
              selectedUserType === "Startups"
                ? "border-green-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex-shrink-0 ml-10">
              <span className="text-green-500">🤝</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">
                Sign Up As Startups
              </h3>
              <p className="text-sm text-black">I want to join as Startups</p>
            </div>
          </button>

          <button
            onClick={() => handleUserTypeSelect("Investors")}
            className={`w-full p-4 border rounded-lg flex items-start space-x-3 hover:bg-gray-100 ${
              selectedUserType === "Investors"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex-shrink-0">
              <span className="text-blue-500">📈</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg ml-10 text-black">
                Sign Up As Investors
              </h3>
              <p className="text-sm text-black ml-10">
                I want to join as Investors.
              </p>
            </div>
          </button>

          <button
            onClick={() => handleUserTypeSelect("ServiceProvider")}
            className={`w-full p-4 border rounded-lg flex items-start space-x-3 hover:bg-gray-100 ${
              selectedUserType === "ServiceProvider"
                ? "border-black"
                : "border-gray-300"
            }`}
          >
            <div className="flex-shrink-0">
              <span className="text-yellow-500">🛠️</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg ml-4 text-black">
                Sign Up As ServiceProvider
              </h3>
              <p className="text-sm text-black">
                I want to join as ServiceProvider.
              </p>
            </div>
          </button>
        </div>
        <button
          onClick={handleContinue}
          className="mt-4 w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600"
        >
          Continue
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Have an account?
          <button className="text-blue-500 font-bold hover:underline cursor-pointer">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default JoinOption;
