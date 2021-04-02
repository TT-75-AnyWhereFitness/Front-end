import React from "react";
import styled from "styled-components";
import axios from "axios";
// NEEDS PROPS FROM HOME TO MAKE CARDS FOR CLASSES

const Lesson = (props) => {
  const { card } = props;
  const removeLesson = () => {
    axios
      .delete(
        `https://tt75-anywhere-fitness.herokuapp.com/api/classes/${card.class_id}`
      )
      .then(() => {
        reload();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const reload = () => {
    window.location.reload(false);
  };

  return (
    <CardHolder>
      <Card>
        <h3 className="card-title">{card.name}</h3>

        <P className="card-text">
          <b>Instructor:</b> {card.instructor_username}
        </P>

        <P className="card-text">
          <b>Type:</b> {card.type}
        </P>

        <P className="card-text">
          <b>Time:</b> {card.start_time}
        </P>

        <P className="card-text">
          <b>Date:</b> {card.date}
        </P>

        <P className="card-text">
          <b>Duration:</b> {card.duration}
        </P>

        <P className="card-text">
          <b>Intensity:</b> {card.intensity_level}
        </P>

        <P className="card-text">
          <b>Location:</b> {card.location}
        </P>

        <P className="card-text">
          <b>Current Attending:</b> {card.attendees}
        </P>
        {/* 
        <P className="card-text">
          <b>Number RSVP'ed:</b> {card.numRSVP}
        </P> */}

        <P className="card-text">
          <b>Max Class Size:</b> {card.max_size}
        </P>
        {props.role === "instructor" ? (
          <button name="delete-btn" onClick={removeLesson}>
            DELETE
          </button>
        ) : (
          <button name="reserve-btn">RESERVE</button>
        )}
      </Card>
    </CardHolder>
  );
};

export default Lesson;

/* 
MAKE STYLING FOR THE CARDS

FOR FUNCTIONALITY:
    RSVP/UN-RSVP FOR CLASSES
    CANNOT RESERVE IF FULL
*/
const CardHolder = styled.div`
  /* border: 10px black solid; */
  width: 80vw;
  z-index: -1;
  margin: auto;
  /* height: 80vh; */
`;

const Card = styled.div`
  /* border: 3px red solid; */
  width: 40%;
  height: 40%;
`;

const P = styled.p`
  /* border: 3px green solid; */
  width: auto;
`;
