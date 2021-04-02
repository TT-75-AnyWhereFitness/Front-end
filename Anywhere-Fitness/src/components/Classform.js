import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  instructor_username: "",
  type: "",
  date: "",
  start_time: "",
  duration: 0,
  intensity_level: "",
  location: "",
  attendees: 0,
  max_size: 0,
};

const Classform = () => {
  const [classInfo, setClassInfo] = useState(initialState);

  const addLesson = () => {
    axios
      .post(
        `https://tt75-anywhere-fitness.herokuapp.com/api/classes/`,
        classInfo
      )
      .then((res) => {
        console.log("res: ", res);
        setClassInfo(initialState);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  //onChange Event

  const onChange = (evt) => {
    setClassInfo({ ...classInfo, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <form onSubmit={addLesson}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={classInfo.name}
            onChange={onChange}
          />
        </label>
        <label>
          Instructor:
          <input
            name="instructor_username"
            type="text"
            value={classInfo.instructor_username}
            onChange={onChange}
          />
        </label>
        <label>
          Type:
          <input
            name="type"
            type="text"
            value={classInfo.type}
            onChange={onChange}
          />
        </label>

        <label>
          Date
          <input
            name="date"
            type="text"
            value={classInfo.date}
            onChange={onChange}
          />
        </label>

        <label>
          Start time:
          <input
            name="start_time"
            type="text"
            value={classInfo.start_time}
            onChange={onChange}
          />
        </label>
        <label>
          Duration:
          <input
            name="duration"
            type="text"
            value={classInfo.duration}
            onChange={onChange}
          />
        </label>

        <label>
          Intensity level:
          <input
            name="intensity_level"
            type="text"
            value={classInfo.intensity_level}
            onChange={onChange}
          />
        </label>

        <label>
          Location:
          <input
            name="location"
            type="text"
            value={classInfo.location}
            onChange={onChange}
          />
        </label>
        <label>
          Current registered attendees:
          <input
            name="attendees"
            type="text"
            value={classInfo.attendees}
            onChange={onChange}
          />
        </label>
        <label>
          Max class size:
          <input
            name="max_size"
            type="text"
            value={classInfo.max_size}
            onChange={onChange}
          />
        </label>
        <button onClick={addLesson}>SUBMIT CLASS</button>
      </form>
    </>
  );
};

export default Classform;
