import React, { useState, useEffect } from "react";
import axios from "axios"; // with auth?
import Dropdown from "react-dropdown";

const Home = () => {
  const [search, setSearch] = useState({ query: "", item: "" }); // SEARCH CLASSES
  const options = ["time", "date", "duration", "type", "intensity", "location"];
  return (
    <div className="container">
      <form>
        <label>
            Select an Option
          <Dropdown
            options={options}
            // onChange={onChange}
            // /*We Need To Make an Onchange! */ value={e.value}
            placeholder="Select an Option"
          />
        </label>
      </form>
      {/* MAP CLASSES */ }
    </div>
  );
};

export default Home