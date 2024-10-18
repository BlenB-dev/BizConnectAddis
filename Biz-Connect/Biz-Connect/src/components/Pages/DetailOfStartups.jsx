import React, { useState } from "react";
import Footer from "../Footer";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faUsers,
  faDollarSign,
  faChartLine,
  faHandshake,
  faInfoCircle,
  faCommentsDollar,
  faGlobe,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FaPlus } from "react-icons/fa";

const DetailOfStartups = () => {
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(""); // State to hold new comment input

  // Sample service provider data
  const Startups = [
    {
      Name: "EthioTech Innovations",
      TypeOfService: "Legal",
      Location: "Addis Ababa, Ethiopia",
      FounderBio: "Amanuel has 10 years in tech, Hana in marketing",
      BusinessDescription:
        "Providing legal consulting for startups including incorporation, compliance, and intellectual property protection.",
      IndustrySector: "Fin Tech",
      BusinessModel: ["B2B"],
      StageOfDevelopment: ["Growth"],
      FundingRequirement: "500,000 ETB",
      CurrentFundingStatus: ["Seed Funded"],
      UseofFunds: "Expanding tech infrastructure, marketing",
      RevenueModel: ["Transaction Fees"],
      CurrentRevenue: "1,200,000 ETB",
      MarketSizeandPotential:
        "Estimated market size of 10 million users within 3 years",
      CompetitiveAdvantage: "Strong local partnerships, innovative technology",
      CustomerBase: "50,000 active users",
      FinancialProjections: "Projecting 20 million ETB revenue by next year.",
      TeamSize: "20",
      KeyTeamMembers: "CTO: Tesfaye Alemayehu, COO: Meaza Getachew",
      AdvisorsandMentors: "Dr. Solomon Berhane, Prof. Liya Bekele",
      LegalStructure: "PLC",
      ExistingPartnerships: "Partnership with Ethio Telecom.",
      SocialImpactGoals: "Financial inclusion for the unbanked population.",
      AwardsandRecognitions: "None",
      ContactInformation: "+251 912 345678",
    },
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to state
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="mx-auto p-12 mt-[-60px] rounded-lg sm:w-full sm:ml-0 sm:h-auto">
      <Breadcrumb currentPage="DetailOfStartups" />
      {Startups.map((startupData, index) => (
        <div key={index} className="mb-12 mt-10">
          {/* Header with Name and Basic Info */}
          <div className="mb-6">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold text-gray-600">
                {startupData.Name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold">{startupData.Name}</h1>
                <p className="text-gray-600 text-lg">{startupData.Location}</p>
                <p className="text-gray-800 text-md">
                  <span className="font-semibold">Contact Info: </span>
                  {startupData.ContactInformation}
                </p>
              </div>
              <a
                href="#"
                className="text-red-500 border ml-[860px] mt-[10px] py-3 absolute whitespace-nowrap border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition flex items-center"
              >
                <FaPlus className="mr-2" />
                Follow
              </a>
              {/* Visit Site Button */}
              <a
                href="#"
                className="bg-purple-600 whitespace-nowrap text-white absolute ml-[990px] mt-[10px] mediumText p-3 sm:p-4 rounded-lg text-sm hover:bg-purple-700 transition"
              >
                VISIT SITE
              </a>
            </div>
          </div>

          {/* Displaying Each Detail Vertically */}
          <div className="flex flex-col gap-6">
            {/* Business Description */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Business Description</h3>
              <p className="text-gray-700">{startupData.BusinessDescription}</p>
            </div>

            {/* Founder Bio */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <FontAwesomeIcon icon={faUsers} className="text-green-500 mr-3" />
              <h3 className="font-semibold text-xl">Founder Bio</h3>
              <p className="text-gray-700">{startupData.FounderBio}</p>
            </div>

            {/* Industry Sector */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-purple-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Industry Sector</h3>
              <p className="text-gray-700">{startupData.IndustrySector}</p>
            </div>

            {/* Business Model */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-blue-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Business Model</h3>
              <p className="text-gray-700">
                {startupData.BusinessModel.join(", ")}
              </p>
            </div>

            {/* Stage of Development */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-blue-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Stage of Development</h3>
              <p className="text-gray-700">
                {startupData.StageOfDevelopment.join(", ")}
              </p>
            </div>

            {/* Funding Requirement */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <FontAwesomeIcon
                icon={faCommentsDollar}
                className="text-red-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Funding Requirement</h3>
              <p className="text-gray-700">{startupData.FundingRequirement}</p>
            </div>

            {/* Current Funding Status */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-green-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Current Funding Status</h3>
              <p className="text-gray-700">
                {startupData.CurrentFundingStatus.join(", ")}
              </p>
            </div>

            {/* Use of Funds */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-gray-500">
              <h3 className="font-semibold text-xl">Use of Funds</h3>
              <p className="text-gray-700">{startupData.UseofFunds}</p>
            </div>

            {/* Revenue Model */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-purple-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Revenue Model</h3>
              <p className="text-gray-700">
                {startupData.RevenueModel.join(", ")}
              </p>
            </div>

            {/* Current Revenue */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-green-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Current Revenue</h3>
              <p className="text-gray-700">{startupData.CurrentRevenue}</p>
            </div>

            {/* Market Size and Potential */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-3" />
              <h3 className="font-semibold text-xl">
                Market Size and Potential
              </h3>
              <p className="text-gray-700">
                {startupData.MarketSizeandPotential}
              </p>
            </div>

            {/* Competitive Advantage */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <FontAwesomeIcon
                icon={faGavel}
                className="text-purple-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Competitive Advantage</h3>
              <p className="text-gray-700">
                {startupData.CompetitiveAdvantage}
              </p>
            </div>

            {/* Customer Base */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500 mr-3" />
              <h3 className="font-semibold text-xl">Customer Base</h3>
              <p className="text-gray-700">{startupData.CustomerBase}</p>
            </div>

            {/* Financial Projections */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-green-500 mr-3"
              />
              <h3 className="font-semibold text-xl">Financial Projections</h3>
              <p className="text-gray-700">
                {startupData.FinancialProjections}
              </p>
            </div>

            {/* Team Size */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500 mr-3" />
              <h3 className="font-semibold text-xl">Team Size</h3>
              <p className="text-gray-700">{startupData.TeamSize}</p>
            </div>

            {/* Key Team Members */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-xl">Key Team Members</h3>
              <p className="text-gray-700">{startupData.KeyTeamMembers}</p>
            </div>

            {/* Advisors and Mentors */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl">Advisors and Mentors</h3>
              <p className="text-gray-700">{startupData.AdvisorsandMentors}</p>
            </div>

            {/* Legal Structure */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-xl">Legal Structure</h3>
              <p className="text-gray-700">{startupData.LegalStructure}</p>
            </div>

            {/* Existing Partnerships */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-xl">Existing Partnerships</h3>
              <p className="text-gray-700">
                {startupData.ExistingPartnerships}
              </p>
            </div>

            {/* Social Impact Goals */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl">Social Impact Goals</h3>
              <p className="text-gray-700">{startupData.SocialImpactGoals}</p>
            </div>

            {/* Awards and Recognitions */}
            <div className="block transition-transform hover:scale-105 bg-gray-100 p-5 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-xl">Awards and Recognitions</h3>
              <p className="text-gray-700">
                {startupData.AwardsandRecognitions}
              </p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="flex">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-grow p-3 border rounded-l-lg"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </form>

            {/* Display Comments */}
            <div className="mt-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-md shadow-md my-2"
                >
                  {comment}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default DetailOfStartups;
