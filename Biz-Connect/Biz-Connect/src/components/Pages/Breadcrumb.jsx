// Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  const renderPageName = () => {
    switch (currentPage) {
      case "StartupsPage":
        return "Startups";

      case "DetailOfServiceProvider":
        return (
          <>
            <Link to="/StartupsPage" className="text-blue-500 hover:underline">
              Startups
            </Link>
            <span className="mx-2 text-gray-500"> &gt; </span>
            <span className="text-gray-700">DetailOfServiceProvider</span>
          </>
        );
      case "DetailOfStartups":
        return (
          <>
            <Link to="/InvestorPage" className="text-blue-500 hover:underline">
              InvestorPage
            </Link>
            <span className="mx-2 text-gray-500"> &gt; </span>
            <span className="text-gray-700">DetailOfStartupsPage</span>
          </>
        );
      case "InvestorPage":
        return "InvestorPage";
      case "ServiceProviders":
        return "ServiceProviders ";
      case "ProfileSettingsPageForStartups":
        return (
          <>
            <Link to="/StartupsPage" className="text-blue-500 hover:underline">
              Startups
            </Link>
            <span className="mx-2 text-gray-500"> &gt; </span>
            <span className="text-gray-700">
              ProfileSettingsPageForStartups
            </span>
          </>
        );
      case "ProfileSettingsPageForInvestors":
        return (
          <>
            <Link to="/InvestorPage" className="text-blue-500 hover:underline">
              InvestorPage
            </Link>
            <span className="mx-2 text-gray-500"> &gt; </span>
            <span className="text-gray-700">
              ProfileSettingsPageForInvestors
            </span>
          </>
        );
      default:
        return "Home";
    }
  };

  return (
    <div className="mt-[-15px] ml-[-60px] absolute">
      <nav className="flex items-center mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <span className="mx-2 text-gray-500"> &gt; </span>
        <span className="text-gray-700">{renderPageName()}</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
