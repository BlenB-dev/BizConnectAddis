import React from "react";
import { FaPlus, FaRegLightbulb } from "react-icons/fa";
import Footer from "../Footer";
import FilterForStartups from "./FilterForStartups";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
const ServiceProviderCard = ({
  Name, // Service Provider Name
  TypeOfServices, // Type of Service
  Servicedescription, // Service Description
  Location, // Location
  // Certifications and Accreditations
  ContactInformation,
}) => {
  return (
    <Link
      to="/DetailOfServiceProvider"
      className="block transition-transform hover:scale-105"
    >
      <div className="absloute border w-[900px]  ml-[100px] rounded-lg p-10 bg-white shadow-lg mb-6">
        <div className="flex justify-between items-center p-3">
          <div>
            <div>
              <h3 className="text-3xl font-semibold ml-[-15px] ">{Name}</h3>
              <p className="text-dark mediumText mb-3">
                <span className="p-3 -ml-3 font-bold ">Location:-</span>
                {Location}
              </p>
            </div>
            <div className="flex space-x-4 absolute ml-[690px] mt-[80px]">
              <a
                href="/DetailOfInvestors"
                className="text-red-500  whitespace-nowrap border border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                View Details
              </a>
            </div>
            <p className="text-dark mediumText -mt-4 mb-3">
              <span className="p-3 -ml-3 font-bold">Servicedescription:</span>
              <div className="">
                {Servicedescription.split(".").map((sentence, index) => (
                  <span key={index}>
                    {sentence.trim() && <>{sentence.trim()}.</>}
                    <br />
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 ">
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
    </Link>
  );
};

const ServiceProviderList = () => {
  const serviceProviders = [
    {
      Name: "Addis Legal Advisors",
      TypeOfService: "Legal",
      Location: "Addis Ababa, Ethiopia",
      TypeOfServices: [
        "Legal Consulting",
        "Incorporation",
        "Compliance",
        "Intellectual Property Protection",
      ],
      Servicedescription:
        "Providing legal consulting for startups including. incorporation, compliance, and intellectual property protection.",
      ExperienceInIndustryInYears: 15, // years
      SpecificSectors: ["Tech", "Healthcare", "Manufacturing"],
      KeyClientsAndReferences: ["EthioTech Innovations", "Addis HealthTech"],
      PricingStructure: "Hourly",
      AvailablePackages: [
        "Startup Legal Package",
        "Intellectual Property Package",
      ],
      TeamSize: 10,
      CertificationsAndAccreditations: ["Ethiopian Lawyers' Association"],
      ContactInformation: "info@addislegal.com, +251 911 223344",
    },
    {
      Name: "Blue Horizon Ventures",
      TypeOfService: "Business Consulting",
      Location: "Nairobi, Kenya",
      TypeOfServices: [
        "Business Strategy",
        "Market Research",
        "Growth Consulting",
        "Startup Mentorship",
      ],
      Servicedescription:
        "Helping startups in the East African region to scale by providing business strategy, growth consulting, and market research services.",
      ExperienceInIndustryInYears: 12,
      SpecificSectors: ["Agriculture", "Fintech", "E-commerce"],
      KeyClientsAndReferences: ["GreenAgro Solutions", "Safaricom Ventures"],
      PricingStructure: "Project-based",
      AvailablePackages: ["Growth Strategy Package", "Market Entry Package"],
      TeamSize: 25,
      CertificationsAndAccreditations: [
        "African Business Consultants Association",
      ],
      ContactInformation: "info@bluehorizon.co.ke, +254 722 345678",
    },
    {
      Name: "TechBridge Solutions",
      TypeOfService: "IT Consulting",
      Location: "Cape Town, South Africa",
      TypeOfServices: [
        "Software Development",
        "Cloud Solutions",
        "IT Infrastructure",
        "Cybersecurity",
      ],
      Servicedescription:
        "Specializing in offering IT solutions including custom software development, cloud migration, and cybersecurity consulting.",
      ExperienceInIndustryInYears: 8,
      SpecificSectors: ["Healthcare", "Education", "Retail"],
      KeyClientsAndReferences: [
        "MediTech Health Systems",
        "EduSmart South Africa",
      ],
      PricingStructure: "Hourly",
      AvailablePackages: ["Cloud Migration Package", "Cybersecurity Audit"],
      TeamSize: 18,
      CertificationsAndAccreditations: [
        "Microsoft Gold Partner",
        "AWS Certified",
      ],
      ContactInformation: "support@techbridge.co.za, +27 21 555 1234",
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
        <div className="w-[300px] ml-[-900px] p-4 mt-[44px] ">
          <FilterForStartups />
        </div>
      </div>
    </div>
  );
};

const StartupsPage = () => {
  return (
    <div className="investor-container min-h-screen ml-[83px] -mt-10  p-5 mx-auto max-w-7xl">
      <Breadcrumb currentPage="StartupsPage" />
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold">
          Yous can search any ServiceProvider
        </h1>
      </div>

      <div className="search-container flex flex-col md:flex-row justify-between items-start mb-6 w-full">
        <input
          type="text"
          placeholder="Search Your Service provider"
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

export default StartupsPage;
