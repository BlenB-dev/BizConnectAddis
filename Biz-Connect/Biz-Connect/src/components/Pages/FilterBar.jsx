import React from "react";

function FilterBar() {
  return (
    <div className="relative flex space-x-8 ">
      <div className="w-[300px]  p-4 mt-[-20px] bg-white border rounded-lg">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Category</h4>
          <select className="border p-2 w-full">
            <option>Select Categories</option>
          </select>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Experience level</h4>
          <div className="space-y-2">
            {["Entry", "Intermediate", "Expert"].map((level) => (
              <label className="flex items-center" key={level}>
                <input type="checkbox" className="mr-2" />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Job type</h4>
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
          <h4 className="font-semibold mb-2">Number of proposals</h4>
          <div className="space-y-2">
            {["Less than 5", "5 to 10", "10 to 15", "15 to 20", "20 to 50"].map(
              (range) => (
                <label className="flex items-center" key={range}>
                  <input type="checkbox" className="mr-2" />
                  {range}
                </label>
              )
            )}
          </div>
        </div>

        {/* Client History */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Client history</h4>
          <div className="space-y-2">
            {["No hires", "1 to 9 hires", "10+ hires"].map((history) => (
              <label className="flex items-center" key={history}>
                <input type="checkbox" className="mr-2" />
                {history}
              </label>
            ))}
          </div>
        </div>

        {/* Client Location */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Client location</h4>
          <select className="border p-2 w-full">
            <option>Select client locations</option>
          </select>
        </div>

        {/* Project Length */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Project length</h4>
          <div className="space-y-2">
            {[
              "Less than one month",
              "1 to 3 months",
              "3 to 6 months",
              "More than 6 months",
            ].map((length) => (
              <label className="flex items-center" key={length}>
                <input type="checkbox" className="mr-2" />
                {length}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Hours per week</h4>
          <div className="space-y-2">
            {["Less than 30 hrs/week", "More than 30 hrs/week"].map((hours) => (
              <label className="flex items-center" key={hours}>
                <input type="checkbox" className="mr-2" />
                {hours}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
