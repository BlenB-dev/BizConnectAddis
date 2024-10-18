import React from "react";
import { IoArrowBack } from "react-icons/io5";

const InvestorSignup = ({ onClose, onBack }) => {
  return (
    <div className="fixed inset-24 bg-opacity-97 bg-white rounded-lg mt-7 p-10 shadow-lg max-w-md mx-auto">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        X
      </button>
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        onClick={onBack}
      >
        <IoArrowBack size={24} />
        <span>Back</span>
      </button>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Join as Investor
      </h2>
      <div className="flex flex-col space-y-4">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with Google
        </button>
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with LinkedIn
        </button>
      </div>
      <div className="my-6 text-center text-gray-500">Or</div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Work email"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        By continuing, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

const StartupSignup = ({ onClose, onBack }) => {
  return (
    <div className="fixed inset-24 bg-opacity-97 bg-white p-10 rounded-lg mt-7 shadow-lg max-w-md mx-auto">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        X
      </button>
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        onClick={onBack}
      >
        <IoArrowBack size={24} />
        <span>Back</span>
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Join as Startup
      </h2>
      <div className="flex flex-col space-y-4">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with Google
        </button>
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with LinkedIn
        </button>
      </div>
      <div className="my-6 text-center text-gray-500">Or</div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Work email"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        By continuing, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

const ServiceProviderSignup = ({ onClose, onBack }) => {
  return (
    <div className="fixed inset-24 bg-opacity-97 bg-white p-10 rounded-lg mt-7 shadow-lg max-w-md mx-auto">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        X
      </button>
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        onClick={onBack}
      >
        <IoArrowBack size={24} />
        <span>Back</span>
      </button>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Join as Service Provider
      </h2>
      <div className="flex flex-col space-y-4">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with Google
        </button>
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Continue with LinkedIn
        </button>
      </div>
      <div className="my-6 text-center text-gray-500">Or</div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Work email"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        By continuing, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Use
        </a>
        and
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export { InvestorSignup, StartupSignup, ServiceProviderSignup };
