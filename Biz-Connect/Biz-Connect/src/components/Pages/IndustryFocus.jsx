import { useState } from 'react';

export default function IndustryFocus() {
  const [selections, setSelections] = useState({
    Tech: { primaryFocus: false, interested: false, notInterested: false },
    AgriTech: { primaryFocus: false, interested: false, notInterested: false },
    FinTech: { primaryFocus: false, interested: false, notInterested: false },
    Healthcare: { primaryFocus: false, interested: false, notInterested: false },
    Others: { primaryFocus: false, interested: false, notInterested: false },
  });
  const [otherIndustry, setOtherIndustry] = useState('');
  const handleCheckboxChange = (industry, field) => {
    setSelections((prev) => ({
      ...prev,
      [industry]: {
        ...prev[industry],
        [field]: !prev[industry][field],
      },
    }));
  };

  return (
    <div className="container ml-[-515px]   p-6 w-[800px]">
      <h1 className="mediumText font-bold mb-4">Select your industry focus and interest levels   <span className="text-red-500">*</span></h1>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Industry</th>
            <th className="px-4 py-2">Primary Focus</th>
            <th className="px-4 py-2">Interested</th>
            <th className="px-4 py-2">Not Interested</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(selections).map((industry) => (
            <tr key={industry} className="border-b">
              <td className="px-4 py-2">{industry}</td>
              <td className="px-4 py-2 text-center">
                <input
                  type="checkbox"
                  checked={selections[industry].primaryFocus}
                  onChange={() => handleCheckboxChange(industry, 'primaryFocus')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <input
                  type="checkbox"
                  checked={selections[industry].interested}
                  onChange={() => handleCheckboxChange(industry, 'interested')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <input
                  type="checkbox"
                  checked={selections[industry].notInterested}
                  onChange={() => handleCheckboxChange(industry, 'notInterested')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selections.Others.primaryFocus || selections.Others.interested ? (
        <div className="mt-6">
          <label className="block text-gray-700 font-semibold mb-2">
            On the question above, if you had selected Others, please provide the specific industry.
          </label>
          <input
            type="text"
            value={otherIndustry}
            onChange={(e) => setOtherIndustry(e.target.value)}
            placeholder="Your answer"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
      ) : null}

    </div>
  );
}
