import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
const ServiceProviderBio = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [bio, setBio] = useState("");
  const [newBio, setNewBio] = useState(bio);

  const [isServicesEditable, setIsServicesEditable] = useState(false);
  const [services, setServices] = useState("");

  const [newServices, setNewServices] = useState(services);

  // Edit Bio Handlers
  const handleEditClick = () => {
    setNewBio(bio);
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setBio(newBio);
    setIsEditable(false);
  };

  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  // Edit Services Handlers
  const handleServicesEditClick = () => {
    setNewServices(services);
    setIsServicesEditable(true);
  };

  const handleServicesSaveClick = () => {
    setServices(newServices);
    setIsServicesEditable(false);
  };

  const handleServicesChange = (e) => {
    setNewServices(e.target.value);
  };

  return (
    <div className="container mx-auto p-6 border-2 w-full max-w-screen-lg">
      <section className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Service Provider</p>
            <p className="text-gray-500">Location: Addis Ababa</p>
          </div>
        </div>
        <a href="/ProfileSettingsPageForServiceProvider">
          <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 border border-green-600 px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7v14"
              />
            </svg>
            <span>Profile Settings</span>
          </button>
        </a>
      </section>

      <hr className="mb-6" />

      {/* Bio Section */}
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2">
          Please provide a brief bio, including your experience and background{" "}
          <span className="text-red-500">*</span>
        </h1>
        {!isEditable && (
          <button
            className="text-green-600 p-2 rounded-full hover:bg-gray-200"
            onClick={handleEditClick}
          >
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </button>
        )}

        <div>
          {isEditable ? (
            <textarea
              className="w-full h-36 p-4 mt-2 border-2 rounded-md"
              value={newBio}
              placeholder="Write your bio here..."
              onChange={handleBioChange}
            />
          ) : (
            <div className="mt-2 p-4 w-full h-36 border-2 rounded-md">
              {bio || "No bio available. Please add one."}
            </div>
          )}

          {isEditable && (
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleSaveClick}
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2">
          List the services you provide (e.g., IT Consulting, Legal Advice){" "}
          <span className="text-red-500">*</span>
        </h1>
        {!isServicesEditable && (
          <button
            className="text-green-600 p-2 rounded-full hover:bg-gray-200"
            onClick={handleServicesEditClick}
          >
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </button>
        )}

        <div>
          {isServicesEditable ? (
            <textarea
              className="w-full h-36 p-4 mt-2 border-2 rounded-md"
              placeholder="Describe your services here..."
              value={newServices}
              onChange={handleServicesChange}
            />
          ) : (
            <div className="mt-2 p-4 w-full h-36 border-2 rounded-md">
              {services || "No services listed. Please add your offerings."}
            </div>
          )}

          {isServicesEditable && (
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleServicesSaveClick}
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mb-8">
        <label className="block text-xl font-bold mb-2">
          Please provide your contact information (e.g., email, phone number)
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Your contact information"
          className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <label className="block text-xl font-bold mb-2">
          Please list any certifications or accreditations you hold
        </label>
        <input
          type="text"
          placeholder="Your certifications"
          className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Previous Clients Section */}
      <div className="mb-8">
        <label className="block text-xl font-bold mb-2">
          Please mention any notable clients or companies you have worked with
        </label>
        <input
          type="text"
          placeholder="Previous clients"
          className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default ServiceProviderBio;
