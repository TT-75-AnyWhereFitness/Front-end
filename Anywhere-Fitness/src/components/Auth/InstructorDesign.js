import React, { useState, useEffect } from "react";
import axios from "axios";
import Lesson from "./ClassCards";
import ClassForm from "../Classform";

export default function Instructor() {
  const [search, setSearch] = useState({ query: "", item: "" }); // SEARCH CLASSES
  const options = ["time", "date", "duration", "type", "intensity", "location"];
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://tt75-anywhere-fitness.herokuapp.com/api/classes")
      .then((res) => {
        setCard(res.data);
        console.log("res.data", res.data);
        console.log("card", card);
      })
      .catch((error) => {
        console.log("Home axios error", error);
      });
  }, []);

  return (
    <div className="container">
      <h3>INSTRUCTOR</h3>
      {card.map((card) => {
        return <Lesson role="instructor" card={card} key={card.class_id} />;
      })}
      <ClassForm />
    </div>
  );
}
