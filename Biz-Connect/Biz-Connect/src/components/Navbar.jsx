import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaSignInAlt, FaChevronDown, FaUserPlus } from "react-icons/fa";
import Login from "./Pages/login";
import {
  InvestorSignup,
  ServiceProviderSignup,
  StartupSignup,
} from "./Pages/SingUpPage";
import JoinOption from "./Pages/JoinOption";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isJoinOptionsOpen, setIsJoinOptionsOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [currentView, setCurrentView] = useState("home");

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen((prev) => !prev);
  const handleSignInClick = () => {
    setIsLoginOpen(true);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  const openJoinModal = () => {
    setIsJoinOptionsOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinOptionsOpen(false);
  };

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
  };
  const handleBack = () => {
    openJoinModal();
  };

  const handleContinue = () => {
    if (selectedUserType) {
      setCurrentView(selectedUserType);
      closeJoinModal();
    } else {
      alert("Please select an option first!");
    }
  };
  const handleClose = () => {
    setCurrentView(null);
  };
  const renderSelectedUI = () => {
    switch (currentView) {
      case "Startups":
        return <StartupSignup onClose={handleClose} onBack={handleBack} />;
      case "Investors":
        return <InvestorSignup onClose={handleClose} onBack={handleBack} />;
      case "ServiceProvider":
        return (
          <ServiceProviderSignup onClose={handleClose} onBack={handleBack} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="bg-gray-900 text-white">
        <div className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a
              href="/"
              className="tracking-tight text-white text-xl font-medium hover:scale-105 dark:text-white hover:text-white-600 dark:hover:text-blue-400 flex items-center space-x-2"
            >
              Biz-Connect
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <input
                type="text"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
                placeholder="Search"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                🔍
              </button>
            </div>

            <button
              onClick={handleSignInClick}
              className="hover:underline flex items-center"
            >
              <FaSignInAlt className="mr-2" /> Sign In
            </button>
            <button
              onClick={openJoinModal}
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black"
            >
              Join
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <FaBars size={24} className="text-white" />
            </button>
          </div>
        </div>

        <hr className="border-t boder-gray-700" />

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4 space-y-4">
            <a
              href="/StartupsPage"
              className="block text-white hover:text-blue-600"
            >
              <i className="fas fa-lightbulb  mr-2"></i>
              Startups
            </a>

            <a
              href="/InvestorPage"
              className="block text-white hover:text-blue-600"
            >
              <i className="fas fa-user-tie mr-2"></i>
              Investors
            </a>
            <button
              onClick={openJoinModal}
              className="flex items-center block text-white hover:text-blue-600"
            >
              <FaUserPlus className="mr-2" />
              Join
            </button>

            <button
              onClick={handleSignInClick}
              className="flex items-center block text-white hover:text-blue-600"
            >
              <FaSignInAlt className="mr-2" />
              Sign In
            </button>

            <button
              onClick={toggleMobileDropdown}
              className="w-full flex items-center text-white hover:text-blue-600 "
            >
              <i className="fas fa-briefcase mr-2"></i>
              Business Services <FaChevronDown className="ml-1" />
            </button>

            {isMobileDropdownOpen && (
              <div className="bg-gray-700 p-2 rounded-md mt-2">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-blue-400"
                    >
                      Sales Outsourcing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-blue-400"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-blue-400"
                    >
                      Lead Generation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-blue-400"
                    >
                      Lead Qualification
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="hidden md:flex  mediumText justify-center bg-white text-dark space-x-8 py-2 text-lg">
          <a href="/StartupsPage" className="hover:underline">
            <i className="fas fa-lightbulb mr-2"></i>
            Startups
          </a>
          <a href="#" className="hover:underline">
            <i className="fas fa-laptop-code mr-2"></i>
            IT Services
          </a>
          <a href="/InvestorPage" className="hover:underline">
            <i className="fas fa-user-tie mr-2"></i>
            Investors
          </a>
          <a href="/ServiceProviders" className="hover:underline">
            <span className="text-yellow-500">🛠️</span>
            ServiceProvider
          </a>

          <div className="relative mt-[-7px]">
            <button
              onClick={toggleDropdown}
              className="text-dark hover:underline px-3 py-2 rounded-md flex items-center"
            >
              <i className="fas fa-briefcase mr-2"></i>
              Business Services <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 mt-2 w-screen max-w-md bg-white shadow-lg rounded-md">
                <div className="p-6 grid grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-gray-900 font-bold mb-2">
                      Sales Support
                    </h3>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Sales Outsourcing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Customer Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Lead Generation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Lead Qualification
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-bold mb-2">
                      Call Center Services
                    </h3>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          BPO
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Call Centers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Answering Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Outbound Call Centers
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-bold mb-2">
                      Financial Services
                    </h3>
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Accounting
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Private Equity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Payroll Processing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Mergers & Acquisitions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Wealth & Asset Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-300">
                  <a
                    href="/StartupsPage"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    More in Business Services &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="hover:underline">
            <i className="fas fa-headset mr-2"></i>
            Sales Support
          </a>
          <a href="#" className="hover:underline">
            <i className="fas fa-money-bill-wave mr-2"></i>
            Payroll Processing
          </a>
        </div>

        {isJoinOptionsOpen && (
          <JoinOption
            selectedUserType={selectedUserType}
            handleUserTypeSelect={handleUserTypeSelect}
            handleContinue={handleContinue}
            closeJoinModal={closeJoinModal}
          />
        )}

        {isLoginOpen && <Login onClose={closeModal} />}
      </header>

      <main>{renderSelectedUI()}</main>
    </div>
  );
};

export default Navbar;
