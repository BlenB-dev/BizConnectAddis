import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";

import ThiredSection from "./components/ThiredSection";
import Login from "./components/Pages/login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import InvestorPage from "./components/Pages/InvestorPage";
import MessageInDetail from "./components/Pages/MessageInDetail";
import InvestorsNavbar from "./components/InvestorsNavbar";
import ServiceProviders from "./components/Pages/ServiceProviders";
import InvestorsBio from "./components/Pages/InvestorsBio";
import StartupsPage from "./components/Pages/StartupsPage";
import StartupsNavbar from "./components/StartupsNavbar";
import "./components/Pages/style.css";
import "./components/Pages/DetailOfServiceProvider";
import DetailOfServiceProvider from "./components/Pages/DetailOfServiceProvider";
import DetailOfStartups from "./components/Pages/DetailOfStartups";
import SecondSection from "./components/SecondSection";
import FourthSection from "./components/FourthSection";
import DetailOfInvestors from "./components/Pages/DetailOfInvestors";
import JoinOption from "./components/Pages/JoinOption";
import FilterBar from "./components/Pages/FilterBar";

import FilterForAngleInvestors from "./components/Pages/FilterForAngleInvestors";
import FilterForStartups from "./components/Pages/FilterForStartups";
import StartupsBio from "./components/Pages/StartupsBio";
import ServiceProviderNavbar from "./components/ServiceProviderNavbar";
import ServiceProviderBio from "./components/Pages/ServiceProviderBio";
import ProfileSettingsPageForServiceProvider from "./components/Pages/ProfileSettingsPageForServiceProvider";
import ProfileSettingsPageForStartups from "./components/Pages/ProfileSettingsPageForStartups";
import ProfileSettingsPageForInvestors from "./components/Pages/ProfileSettingsPageForInvestors";
import Breadcrumb from "./components/Pages/Breadcrumb";

const Maincontent = () => {
  const [backendData, setBackendData] = useState();
  useEffect(() => {
    fetch("/api/startups")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((err) => console.log(err));
  });

  const location = useLocation();
  return (
    <div className="dark:text-white min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* <div id="BackendCheck" >
      {(typeof backendData !== 'object') ? (
        <div>
        <h2>BackEnd Not Connected</h2>
        </div>
      ) : (
        <div>
        <h2>BackEnd Connected</h2>
        { <table>
          <th>startup1</th>
      
        </table> }
        {<tbody>
          {
            backendData.map((d, i) => (
              <tr key={i}>
              <td>{d.startup1}</td>
         
              </tr>

         )) }
        </tbody> }
          
   
       
        </div>
      )
      }
    </div> */}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/login" && <Navbar />}
      {location.pathname === "/InvestorPage" && <InvestorsNavbar />}
      {location.pathname === "/ServiceProviders" && <ServiceProviderNavbar />}
      {location.pathname === "/InvestorsBio" && <InvestorsNavbar />}
      {location.pathname === "/MessageInDetail" && <InvestorsNavbar />}
      {location.pathname === "/Startups" && <StartupsNavbar />}
      {location.pathname === "/DetailOfServiceProvider" && <StartupsNavbar />}
      {location.pathname === "/DetailOfStartups" && <StartupsNavbar />}
      {location.pathname === "/DetailOfInvestors" && <StartupsNavbar />}
      {location.pathname === "/StartupsPage" && <StartupsNavbar />}
      {location.pathname === "/ServiceProviderBio" && <ServiceProviderNavbar />}
      {location.pathname === "/ProfileSettingsPageForServiceProvider" && (
        <ServiceProviderNavbar />
      )}
      {location.pathname === "/ProfileSettingsPageForStartups" && (
        <StartupsNavbar />
      )}
      {location.pathname === "/ProfileSettingsPageForInvestors" && (
        <InvestorsNavbar />
      )}
      {location.pathname === "/StartupsBio" && <StartupsNavbar />}

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/InvestorPage" element={<InvestorPage />} />
          <Route path="/ServiceProviders" element={<ServiceProviders />} />
          <Route path="/InvestorsBio" element={<InvestorsBio />} />
          <Route path="/MessageInDetail" element={<MessageInDetail />} />
          <Route path="/StartupsPage" element={<StartupsPage />} />
          <Route path="/JoinOption" element={<JoinOption />} />
          <Route path="/DetailOfInvestors" element={<DetailOfInvestors />} />
          <Route path="/FilterBar" element={<FilterBar />} />
          <Route path="/StartupsBio" element={<StartupsBio />} />
          <Route path="/ServiceProviderBio" element={<ServiceProviderBio />} />
          <Route path="/Breadcrumb" element={<Breadcrumb />} />
          <Route
            path="/ProfileSettingsPageForServiceProvider"
            element={<ProfileSettingsPageForServiceProvider />}
          />
          <Route
            path="/ProfileSettingsPageForStartups"
            element={<ProfileSettingsPageForStartups />}
          />
          <Route
            path="/ProfileSettingsPageForInvestors"
            element={<ProfileSettingsPageForInvestors />}
          />
          <Route
            path="/FilterForAngleInvestors"
            element={<FilterForAngleInvestors />}
          />
          <Route path="/FilterForStartups" element={<FilterForStartups />} />
          <Route
            path="/DetailOfServiceProvider"
            element={<DetailOfServiceProvider />}
          ></Route>

          <Route
            path="/DetailOfStartups"
            element={<DetailOfStartups />}
          ></Route>
          <Route
            path="/"
            element={
              <>
                <FirstSection />
                <SecondSection />
                <ThiredSection />
                <FourthSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Maincontent />
    </Router>
  );
};

export default App;
