import React, { useState, useEffect } from "react";
import axios from "axios"; // with auth?
import Lesson from "./ClassCards";

const Home = () => {
  // const [search, setSearch] = useState({ query: "", item: "" }); // SEARCH CLASSES
  // const options = ["time", "date", "duration", "type", "intensity", "location"];
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get("https://tt75-anywhere-fitness.herokuapp.com/api/classes")
      .then((res) => {
        setCard(res.data);
        console.log("res.data", res.data);
        console.log("res.data.id", res.data.id);

        console.log("card", card);
      })
      .catch((error) => {
        console.log("Home axios error", error);
      });
     }, );

  return (
    <div className="container">
      <h3>CLIENT</h3>

      {/* <form>
         <label>
          Select an Option
          <Dropdown
            options={options}
            // onChange={onChange}
            // We Need To Make an Onchange!  value={e.value}
            placeholder="Select an Option"
          />
        </label> 
      </form> */}

      {card.map((card) => {
        return <Lesson card={card} />;
      })}
    </div>
  );
};

export default Home;
