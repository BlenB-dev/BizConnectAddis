import React, { useState } from "react";
import Footer from "../Footer";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDollarSign,
  faLightbulb,
  faChartLine,
  faInfoCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const DetailOfStartups = () => {
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(""); // State to hold new comment input

  const startupData = {
    StartupsName: "GreenTech Innovations",
    FoundersNames: "Lydia Asfaw, Samuel Merha",
    FoundersBio:
      "Lydia has 8 years of experience in renewable energy, while Samuel specializes in business development with 7 years in the sector.",
    BusinessDescription:
      "A startup dedicated to developing affordable solar energy solutions for rural communities in Ethiopia.",
    IndustrySector: "Renewable Energy",
    BusinessModel: "B2C",
    StageOfDevelopment: "Seed Stage",
    Location: "Addis Ababa",
    FundingRequirement: "2,000,000 ETB",
    CurrentFundingStatus: "Seeking Investment",
    UseOfFunds: "Research and development, product launch, and marketing.",
    RevenueModel:
      "Sales of solar products and subscription services for maintenance.",
    CurrentRevenue: "150,000 ETB",
    MarketSizeAndPotential:
      "Targeting 5 million households in rural Ethiopia over the next 5 years.",
    CompetitiveAdvantage:
      "Localized solutions, strong community engagement, and partnerships with NGOs.",
    CustomerBase: "500 active customers.",
    FinancialProjections:
      "Expecting to generate 5 million ETB in revenue within the next 18 months.",
    TeamSize: 15,
    KeyTeamMembers: "CTO: Robel Yared, COO: Meron Kassa",
    AdvisorsAndMentors: "Dr. Abebe Kassa, Prof. Selamawit Bultum",
    LegalStructure: "PLC",
    ExistingPartnerships:
      "Collaboration with local NGOs for community outreach.",
    SocialImpactGoals:
      "Increase access to clean energy and reduce reliance on fossil fuels in rural areas.",
    AwardsAndRecognitions:
      "Finalist in the National Energy Innovation Challenge 2023.",
    ContactInformation: "+251 911 234567",
    Rating: 4.7,
  };

  // Function to handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to state
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="mx-auto mt-[-70px] p-12 rounded-lg sm:w-full sm:ml-0 sm:h-auto">
      <Breadcrumb currentPage="DetailOfInvestors" />
      <div className="mb-12">
        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center text-2xl sm:text-4xl font-bold text-gray-600">
              {startupData.StartupsName.charAt(0)}
            </div>
            <div className="ml-4">
              <h1 className="text-2xl mt-[65px] sm:text-4xl font-bold">
                {startupData.StartupsName}
              </h1>
              <p className="text-gray-600 text-sm sm:text-lg">
                {startupData.TeamSize} employees • {startupData.Location}
              </p>
              <p className="text-gray-800 text-lg sm:text-2xl">
                <span className="text-gray-600 text-sm sm:text-lg">
                  Contact Info:{" "}
                </span>
                {startupData.ContactInformation}
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg mr-2">
                  {Array.from({ length: Math.floor(startupData.Rating) }).map(
                    (_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    )
                  )}
                </span>
                <span className="text-gray-600 text-lg">
                  {startupData.Rating}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="bg-purple-600 whitespace-nowrap text-white mt-4 mediumText p-3 sm:p-4 rounded-lg text-sm hover:bg-purple-700 transition"
          >
            VISIT SITE
          </a>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-6">
          Startup Insights
        </h2>

        {/* Stacked Startup Insights */}
        <div className="flex flex-col gap-6">
          {/* Business Description with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Business Description
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.BusinessDescription}
            </p>
          </div>

          {/* Funding Requirement with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-green-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Funding Requirement
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.FundingRequirement}
            </p>
          </div>

          {/* Current Funding Status with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-yellow-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Current Funding Status
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.CurrentFundingStatus}
            </p>
          </div>

          {/* Revenue Model with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-purple-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Revenue Model
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.RevenueModel}
            </p>
          </div>

          {/* Financial Projections with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-green-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Financial Projections
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.FinancialProjections}
            </p>
          </div>

          {/* Customer Base with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-blue-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Customer Base
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.CustomerBase}
            </p>
          </div>

          {/* Competitive Advantage with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-yellow-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Competitive Advantage
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.CompetitiveAdvantage}
            </p>
          </div>

          {/* Social Impact Goals with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-green-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Social Impact Goals
              </h3>
            </div>
            <p className="text-gray-800 text-lg sm:text-2xl">
              {startupData.SocialImpactGoals}
            </p>
          </div>

          {/* Team Size with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-blue-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">Team Size</h3>
            </div>
            <p className="text-lg">{startupData.TeamSize} employees</p>
          </div>

          {/* Advisors and Mentors with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Advisors and Mentors
              </h3>
            </div>
            <p className="text-lg">{startupData.AdvisorsAndMentors}</p>
          </div>

          {/* Existing Partnerships with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Existing Partnerships
              </h3>
            </div>
            <p className="text-lg">{startupData.ExistingPartnerships}</p>
          </div>

          {/* Awards and Recognitions with Icon */}
          <div className="block transition-transform hover:scale-105 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-500 text-3xl mr-3"
              />
              <h3 className="font-semibold text-xl sm:text-2xl">
                Awards and Recognitions
              </h3>
            </div>
            <p className="text-lg">{startupData.AwardsAndRecognitions}</p>
          </div>
        </div>

        <div className="w-full mt-8">
          <hr className="border-gray-300" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailOfStartups;
