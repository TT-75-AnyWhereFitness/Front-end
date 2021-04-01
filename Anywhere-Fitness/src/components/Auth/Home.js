import React, { useState, useEffect } from "react";
import axios from "axios"; // with auth?
import Dropdown from "react-dropdown";
import Header from "../Header";
import Lesson from "./ClassCards"

const Home = () => {
  const [search, setSearch] = useState({ query: "", item: "" }); // SEARCH CLASSES
  const options = ["time", "date", "duration", "type", "intensity", "location"];
  const [card, setCard] = useState([])
  useEffect(() => {
    axios
      .get("https://tt75-anywhere-fitness.herokuapp.com/api/classes")
      .then((res) => {
       setCard(...card, res.data)
        console.log("res.data", res.data);
      })
      .catch((error) => {
        console.log("Home axios error", error);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <br></br>
      <br></br>
      <br></br>

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
      <Lesson card={card}  />
      {/* {lessons.map((lesson, id) => (
        <Lesson lesson={lesson}  />
      ))} */}
    </div>
  );
};

export default Home;
