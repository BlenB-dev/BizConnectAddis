import React, { useRef, useState } from "react";
import Footer from "../Footer";

const ProfileSettingsPageForServiceProvider = () => {
  const contactInfoRef = useRef(null);
  const locationRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const scrollToContactInfo = () => {
    setActiveSection("contactInfo");
    contactInfoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLocation = () => {
    setActiveSection("location");
    locationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex">
          <aside className="w-1/4 border-r p-6">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <nav className="space-y-2">
              <h3 className="text-lg font-bold mt-6">User Settings</h3>
              <ul className="space-y-1">
                <li
                  className="text-gray-600 hover:text-green-600 cursor-pointer"
                  onClick={scrollToContactInfo}
                >
                  Contact Info
                </li>
                <a href="/ServiceProviderBio">
                  <li className="text-gray-600 hover:text-green-600 cursor-pointer">
                    My Profile
                  </li>
                </a>

                <li className="text-green-600 font-semibold">
                  Profile Settings
                </li>
                <li
                  className="text-gray-600 hover:text-green-600 cursor-pointer"
                  onClick={scrollToLocation}
                >
                  Manage your Location
                </li>
              </ul>
            </nav>
          </aside>

          <main className="w-3/4 p-6 space-y-8">
            <section className="border rounded-lg p-6 bg-white shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Account</h2>
                <button className="text-green-600 hover:text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12h3m0 0h-3m0 0H9m6 0V9m0 3v3m0-3H9m6 0h-3m0 0H9m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-gray-500">User ID</h3>
                  <p className="text-lg">33b3833a</p>
                </div>
                <div>
                  <h3 className="text-gray-500">Name</h3>
                  <p className="text-lg">Blen Bete</p>
                </div>
                <div>
                  <h3 className="text-gray-500">Email</h3>
                  <p className="text-lg">e******55@gmail.com</p>
                </div>
                <button className="text-red-600 hover:underline">
                  Close my account
                </button>
              </div>
            </section>

            <section
              ref={contactInfoRef}
              className={`border rounded-lg p-6 bg-white shadow ${
                activeSection === "contactInfo" ? "ring-2 ring-green-500" : ""
              }`} // Highlight effect for Contact Info
            >
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <div className="mt-4 space-y-4">
                <p className="text-lg">📧 Email: e******55@gmail.com</p>
                <p className="text-lg">📞 Phone: +251 924-454-462</p>
                <p className="text-lg">
                  📍 Address: Addis Ababa, AA 0100, Ethiopia
                </p>
              </div>
            </section>

            <section
              ref={locationRef}
              className={`border rounded-lg p-6 bg-white shadow ${
                activeSection === "location" ? "ring-2 ring-green-500" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Location</h2>
                <button className="text-green-600 hover:text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12h3m0 0h-3m0 0H9m6 0V9m0 3v3m0-3H9m6 0h-3m0 0H9m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-gray-500">Time Zone</h3>
                  <p className="text-lg">UTC+03:00 Baghdad, Nairobi, Riyadh</p>
                </div>
                <div>
                  <h3 className="text-gray-500">Address</h3>
                  <p className="text-lg">Addis Ababa, AA 0100, Ethiopia</p>
                </div>
                <div>
                  <h3 className="text-gray-500">Phone</h3>
                  <p className="text-lg">+251 924-454-462</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className="w-full mt-8">
        <hr className="border-gray-300" />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSettingsPageForServiceProvider;
