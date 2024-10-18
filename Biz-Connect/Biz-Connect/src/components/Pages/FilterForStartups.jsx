import React from "react";

function FilterForStartups() {
  return (
    <div>
      <div className="relative flex space-x-8 ">
        <div className="w-[300px]  p-4 mt-[-20px] bg-white border rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Experience In The Industry</h4>
            <div className="space-y-2">
              {["< 2", "<5 ", "<10"].map((level) => (
                <label className="flex items-center" key={level}>
                  <input type="checkbox" className="mr-2" />
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Pricing Struture</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Hourly
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="border p-1 w-1/2"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="border p-1 w-1/2"
                />
              </div>

              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Fixed-Price
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="border p-1 w-1/2"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="border p-1 w-1/2"
                />
              </div>
            </div>
          </div>

          {/* Number of Proposals */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Specific Sectors</h4>
            <div className="space-y-2">
              {[
                "Tech",
                "Healthcare",
                "Manufacturing",
                " Payroll Processing",
                " Sales Support",
              ].map((range) => (
                <label className="flex items-center" key={range}>
                  <input type="checkbox" className="mr-2" />
                  {range}
                </label>
              ))}
            </div>
          </div>

          {/* Client History */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Team Size</h4>
            <div className="space-y-2">
              {["LessThan 5", "1 to 9 hires", "10+ hires"].map((history) => (
                <label className="flex items-center" key={history}>
                  <input type="checkbox" className="mr-2" />
                  {history}
                </label>
              ))}
            </div>
          </div>

          {/* Client Location */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Type of Service</h4>
            <select className="border p-2 w-full">
              <option> Accounting</option>
              <option> Outbound Call Centers</option>
              <option> Answering Services</option>
              <option> Customer Support</option>
              <option> Sales Support</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterForStartups;
