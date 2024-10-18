import { useState } from "react";
import InvestmentRange from "./InvestmentRange";
import {
  Investmentapproach,
  InvestmentStage,
  Risktolerance,
} from "./InvestmentStage";
import IndustryFocus from "./IndustryFocus";
import Footer from "../Footer";

const StartupsBio = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [bio, setBio] = useState("");
  const [newBio, setNewBio] = useState(bio);

  const [isStartupsEditable, setIsStarupsEditable] = useState(false);
  const [Startups, setStarups] = useState("");

  const [newStartups, setNewStartups] = useState(Startups);

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

  const handleStartupsEditClick = () => {
    setNewStartups(Startups);
    setIsStarupsEditable(true);
  };
  const handleStartupsSaveClick = () => {
    setStarups(newStartups);
    setIsStartupsEditable(false);
  };
  const handleStartupsChange = (e) => {
    setNewStartups(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="mt-[-40px]">
          {/* Profile Section */}
          <section className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-200"
              />
              <div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  John Doe
                </h2>
                <p className="text-gray-600">Service Provider</p>
                <p className="text-gray-500">Location: Addis Ababa</p>
              </div>
            </div>
            <a href="/ProfileSettingsPageForStartups">
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

          <hr className="dark:bg-gray-700 w-full" />

          {/* Bio Section */}
          <div className="mt-10">
            <h1 className="text-xl font-bold">
              Please provide a brief bio, including your experience and
              background <span className="text-red-500">*</span>
            </h1>
            {!isEditable && (
              <button
                className="text-green-600 ml-[1100px]  mt-4  rounded-full hover:bg-gray-200"
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
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
              </button>
            )}

            <form action="">
              {isEditable ? (
                <textarea
                  className="w-full h-40 p-4 mt-4 border rounded-md"
                  value={newBio}
                  placeholder="Write your bio here..."
                  onChange={handleBioChange}
                />
              ) : (
                <div className="-mt-11 p-4 w-full h-40 border-2 rounded-md">
                  {bio || "No bio available. Please add one."}
                </div>
              )}
            </form>

            {isEditable && (
              <button
                className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleSaveClick}
              >
                Save
              </button>
            )}
          </div>
          <h1 className="text-1xl font-bold  mt-[17px]">
            List any startups or companies you have previously invested in. For
            example Abebe (startup) .. Ethiotel( as company)
          </h1>
          {!isStartupsEditable && (
            <button
              onClick={handleStartupsEditClick}
              className="text-green-600 ml-[1100px] mt-[25px]  absolute  p-2 rounded-full hover:bg-gray-200"
            >
              <svg
                class="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
            </button>
          )}

          <div>
            <form action="">
              {isStartupsEditable ? (
                <textarea
                  className="w-full h-[150px] p-4 mt-[20px]"
                  placeholder="Write your bio here..."
                  value={newStartups}
                  onChange={handleStartupsChange}
                />
              ) : (
                <div className="mt-[20px] p-2 w-full h-[150px]  border-2 rounded-[10px]">
                  {Startups || "No bio available. Please add one."}
                </div>
              )}
            </form>
            {isStartupsEditable && (
              <button
                className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleStartupsSaveClick}
              >
                Save
              </button>
            )}{" "}
          </div>

          {/* Sections for Investments and Focus */}
          <div className="mt-10 ml-[500px] space-y-6">
            <InvestmentRange />
            <InvestmentStage />
            <IndustryFocus />
          </div>
          <div className="w-[600px] ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mediumText font-bold mb-2">
              Do you have a specific geographic focus for your investments?
              (e.g., Addis Ababa, Oromia, Nationwide)
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-[600px] ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block  mediumText font-bold mb-4">
              What is your typical investment timeline? (eg: 3-5 years) (e.g.,
              Addis Ababa, Oromia, Nationwide){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-[600px] ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mediumText font-bold mb-4">
              What are your return expectations? (e.g., 5x-10x return on
              investment)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" ml-[1px] w-[680px]">
            <div className="p-6 ">
              <h2 className=" mediumText font-bold mb-4">
                Are you open to making follow-on investments in companies you
                have previously invested in?
                <span className="text-red-500">*</span>
              </h2>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="yes"
                  name="followOnInvestment"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-lg">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="followOnInvestment"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="text-lg">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className=" ml-[1px] w-[660px]">
            <div className="p-6 mb-[10px] ">
              <h2 className=" mt-[-50px] mediumText font-bold mb-4">
                Are you interested in co-investment opportunities with other
                investors?
                <span className="text-red-500">*</span>
              </h2>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="yes"
                  name="followOnInvestment"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-lg">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="followOnInvestment"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="text-lg">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className=" ml-[1px] w-[660px]">
            <div className="p-6 mb-[10px] ">
              <h2 className=" mt-[-50px] mediumText font-bold mb-4">
                Are you willing to mentor the startups you invest in?
                <span className="text-red-500">*</span>
              </h2>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="yes"
                  name="followOnInvestment"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-lg">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="followOnInvestment"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="text-lg">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="w-[600px] ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mt-[-30px]  mediumText font-bold mb-4">
              Please describe any significant network connections that could
              benefit the startups you invest in.
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" ml-[1px] mt-[17px] w-[660px]">
            <div className="p-6 mb-[10px] ">
              <h2 className=" mt-[-50px] mediumText font-bold mb-4">
                Do you have prior experience founding or working in a startup?
                <span className="text-red-500">*</span>
              </h2>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="yes"
                  name="followOnInvestment"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-lg">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="followOnInvestment"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="text-lg">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="w-[600px] ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mt-[-30px] mediumText font-bold mb-4">
              Please provide details of your educational background.
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-[600px]   ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mt-[-10px] mediumText font-bold mb-4">
              Please provide an overview of your professional experience.
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-[600px]   ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mt-[-10px] mediumText font-bold mb-4">
              Describe your involvement in the community, including any
              mentoring, advising, or volunteer work."
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-[600px]   ml-[1px]  mx-auto p-4   rounded-lg">
            <label className="block mt-[-10px] mediumText font-bold mb-4">
              Please provide your contact information (e.g., email, phone
              number).
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <hr className="border-gray-300" />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default StartupsBio;
