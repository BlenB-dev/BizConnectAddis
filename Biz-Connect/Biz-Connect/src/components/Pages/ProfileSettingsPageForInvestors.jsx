import React, { useRef, useState } from "react";
import Footer from "../Footer";
import Breadcrumb from "./Breadcrumb";
const ProfileSettingsPageForInvestors = () => {
  const contactInfoRef = useRef(null);
  const locationRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");
  const [isEditing, setIsEditing] = useState(false); // State for editing mode
  const [username, setUsername] = useState("Blen Bete"); // Sample username
  const [email, setEmail] = useState("e******55@gmail.com"); // Sample email

  const scrollToContactInfo = () => {
    setActiveSection("contactInfo");
    contactInfoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can add code to save changes to the backend if needed
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Resetting to original values if the user cancels
    setUsername("Blen Bete");
    setEmail("e******55@gmail.com");
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb currentPage="ProfileSettingsPageForInvestors" />
      <div className="flex-grow">
        <div className="flex">
          <aside className="w-1/4 border-r p-6">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <nav className="space-y-2">
              <ul className="space-y-1">
                <li
                  className="text-gray-600 absolute mt-7 hover:text-green-600 cursor-pointer"
                  onClick={scrollToContactInfo}
                >
                  Contact Info
                </li>
                <a href="/ServiceProviderBio">
                  <li className="text-gray-600 hover:text-green-600 cursor-pointer">
                    Edit Profile
                  </li>
                </a>
              </ul>
            </nav>
          </aside>

          <main className="w-3/4 p-6 space-y-8">
            <section className="border rounded-lg p-6 bg-white shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Account</h2>
                <button
                  className="text-green-600 hover:text-green-800"
                  onClick={isEditing ? handleSaveClick : handleEditClick} // Toggle save/edit on click
                >
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-gray-500">User ID</h3>
                  <p className="text-lg">33b3833a</p>
                </div>
                <div>
                  <h3 className="text-gray-500">Name</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  ) : (
                    <p className="text-lg">{username}</p>
                  )}
                </div>
                <div>
                  <h3 className="text-gray-500">Email</h3>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  ) : (
                    <p className="text-lg">{email}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex space-x-4">
                    <button
                      onClick={handleCancelClick}
                      className="text-red-600 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                <button className="text-red-600 hover:underline">
                  Close my account
                </button>
              </div>
            </section>

            <section
              ref={contactInfoRef}
              className={`border rounded-lg p-6 bg-white shadow ${
                activeSection === "contactInfo" ? "ring-2 ring-green-500" : ""
              }`}
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

export default ProfileSettingsPageForInvestors;
