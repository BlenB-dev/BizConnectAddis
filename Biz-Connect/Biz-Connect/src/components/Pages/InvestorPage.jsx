import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import FilterForAngleInvestors from "./FilterForAngleInvestors";
import Breadcrumb from "./Breadcrumb";

const ServiceProviderCard = ({
  StartupsName,
  FoundersNames, // Changed to plural for clarity
  FoundersBio, // Changed to plural for clarity
  BusinessDescription,
  TypeOfServices,

  ContactInformation,
}) => {
  return (
    <Link
      to="/DetailOfStartups"
      className="block transition-transform hover:scale-105"
    >
      <div className="absloute border w-[900px]  ml-[100px] rounded-lg p-10 bg-white shadow-lg mb-6">
        <div className="flex justify-between items-center ">
          <div>
            <h3 className="text-3xl font-semibold ml-[-15px] ">
              {StartupsName}
            </h3>
            <div className="flex items-center mt-2">
              <span className="font-bold text-lg px-1 -ml-1">
                FoundersNames:
              </span>
              {FoundersNames}
            </div>
          </div>
          <div className="flex space-x-4 absolute ml-[690px] mt-[280px]">
            <a
              href="/DetailOfInvestors"
              className="text-red-500 border whitespace-nowrap border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="mt-[-3px] text-1xl ">
          <p className="text-dark mb-3 mediumText">
            <span className="font-bold mediumText">BusinessDescription: </span>
            {BusinessDescription}
          </p>
          <div className="flex justify-between items-center mt-[100px] ">
            <div className="flex space-x-2 ml-3">
              {TypeOfServices.map((services, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm"
                >
                  {services}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServiceProviderList = () => {
  const serviceProviders = [
    {
      StartupsName: "EthioTech Innovations",
      FoundersNames: "Amanuel Kebede, Hana Tesfaye",
      FoundersBio: "Amanuel has 10 years in tech, Hana in marketing.",
      BusinessDescription:
        "A tech startup focused on developing mobile payment solutions for the Ethiopian market.",
      IndustrySector: "FinTech",
      BusinessModel: "B2B",
      StageOfDevelopment: "Growth",
      Location: "Addis Ababa",
      FundingRequirement: "500,000 ETB",
      CurrentFundingStatus: "Seed Funded",
      UseOfFunds: "Expanding tech infrastructure, marketing.",
      RevenueModel: "Transaction Fees",
      CurrentRevenue: "1,200,000 ETB",
      MarketSizeAndPotential:
        "Estimated market size of 10 million users within 3 years.",
      CompetitiveAdvantage: "Strong local partnerships, innovative technology.",
      CustomerBase: "50,000 active users",
      FinancialProjections: "Projecting 20 million ETB revenue by next year.",
      TeamSize: 20,
      KeyTeamMembers: "CTO: Tesfaye Alemayehu, COO: Meaza Getachew",
      AdvisorsAndMentors: "Dr. Solomon Berhane, Prof. Liya Bekele",
      LegalStructure: "PLC",
      ExistingPartnerships: "Partnership with Ethio Telecom",
      SocialImpactGoals: "Financial inclusion for the unbanked population.",
      AwardsAndRecognitions: "None",
      ContactInformation: "+251 912 345678",
      TypeOfServices: [
        "Legal Consulting",
        "Incorporation",
        "Compliance",
        "Intellectual Property Protection",
      ],
    },
    {
      StartupsName: "AgriTech Innovations",
      FoundersNames: "Tadesse Abebe, Selamawit Girmay",
      FoundersBio:
        "Tadesse has 12 years in agriculture, Selamawit specializes in agronomy.",
      BusinessDescription:
        "A startup focused on providing tech solutions for farmers in Ethiopia.",
      IndustrySector: "Agriculture Technology",
      BusinessModel: "B2B",
      StageOfDevelopment: "Growth",
      Location: "Addis Ababa",
      FundingRequirement: "800,000 ETB",
      CurrentFundingStatus: "Seed Funded",
      UseOfFunds: "Developing mobile applications, farmer training programs.",
      RevenueModel: "Subscription Fees",
      CurrentRevenue: "1,000,000 ETB",
      MarketSizeAndPotential:
        "Estimated market size of 7 million farmers in Ethiopia.",
      CompetitiveAdvantage:
        "Localized knowledge and technology tailored for Ethiopian farmers.",
      CustomerBase: "30,000 active users",
      FinancialProjections: "Projecting 15 million ETB revenue by next year.",
      TeamSize: 25,
      KeyTeamMembers: "CTO: Dawit Desta, COO: Fikirte Mekonnen",
      AdvisorsAndMentors: "Dr. Hirut Admasu, Mr. Eyob Tesfaye",
      LegalStructure: "PLC",
      ExistingPartnerships: "Partnership with Ministry of Agriculture",
      SocialImpactGoals: "Enhancing food security and farmer livelihoods.",
      AwardsAndRecognitions: "Best Agritech Startup 2023",
      ContactInformation: "+251 911 234567",
      TypeOfServices: [
        "Legal Consulting",
        "Incorporation",
        "Compliance",
        "Intellectual Property Protection",
      ],
    },

    {
      StartupsName: "TourismTech",
      FoundersNames: "Elias Habte, Samrawit Dibaba",
      FoundersBio:
        "Elias has 7 years in travel industry, Samrawit is a software developer.",
      BusinessDescription:
        "A tech platform connecting tourists with local guides in Ethiopia.",
      IndustrySector: "Travel Technology",
      BusinessModel: "B2C",
      StageOfDevelopment: "Early Growth",
      Location: "Addis Ababa",
      FundingRequirement: "400,000 ETB",
      CurrentFundingStatus: "Pre-Seed Funded",
      UseOfFunds: "Developing mobile app, marketing.",
      RevenueModel: "Commission on bookings",
      CurrentRevenue: "250,000 ETB",
      MarketSizeAndPotential:
        "Estimated market size of 2 million tourists annually.",
      CompetitiveAdvantage:
        "Unique local experiences and personalized services.",
      CustomerBase: "5,000 active users",
      FinancialProjections: "Projecting 3 million ETB revenue by next year.",
      TeamSize: 10,
      KeyTeamMembers: "CTO: Elias Habte, Marketing Director: Samrawit Dibaba",
      AdvisorsAndMentors: "Mr. Abebe Tessema, Ms. Helen Woldemariam",
      LegalStructure: "PLC",
      ExistingPartnerships: "Partnership with local tourism boards",
      SocialImpactGoals: "Promoting local culture and heritage.",
      AwardsAndRecognitions: "None",
      ContactInformation: "+251 910 789012",
      TypeOfServices: [
        "Legal Consulting",
        "Incorporation",
        "Compliance",
        "Intellectual Property Protection",
      ],
    },
  ];

  return (
    <div className="relative flex space-x-8">
      <div className="w-[750px] p-10 ">
        <div className="space-y-6 ml-[50px]">
          {serviceProviders.map((provider, index) => (
            <ServiceProviderCard key={index} {...provider} />
          ))}
        </div>
      </div>
      <div className="relative flex space-x-8">
        <div className="w-[300px] ml-[-900px] p-4 mt-[47px] ">
          <FilterForAngleInvestors />
        </div>
      </div>
    </div>
  );
};

const InvestorPage = () => {
  return (
    <div className="investor-container min-h-screen ml-[83px] -mt-9  p-5 mx-auto max-w-7xl">
      <Breadcrumb currentPage="InvestorPage" />
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold">Yous can search any Startups</h1>
      </div>

      <div className="search-container flex flex-col md:flex-row justify-between items-start mb-6 w-full">
        <input
          type="text"
          placeholder="Search Your Startups"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none w-full"
        />
        <button
          className="bg-green-500 whitespace-nowrap text-white p-3 rounded-lg w-full md:w-auto mt-2 md:mt-0 md:ml-4"
          style={{ height: "auto" }}
        >
          Save Search
        </button>
      </div>
      <div className="flex space-x-4">
        <a
          href="/DetailOfServiceProvider"
          className="text-red-500 border border-red-500 px-3 py-1 rounded-full flex items-center hover:bg-red-500 hover:text-white transition"
        >
          <FaRegLightbulb className="mr-2 text-black" /> Recommendations
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 border border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition flex items-center"
        >
          Recently Searched
        </a>
      </div>

      <ServiceProviderList />
      <div className="w-full mt-8">
        <hr className="border-gray-300" />
      </div>
      <Footer />
    </div>
  );
};

export default InvestorPage;
