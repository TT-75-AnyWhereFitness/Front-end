import React, { useState } from "react";

const initialState = {
  name: "",
  instructor_username: "",
  type: "",
  date: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  attendees: null,
  max_size: null,
};

const Classform = () => {
  const [classInfo, setClassInfo] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  //onChange Event
  const onChange = (evt) => {
    setClassInfo({ ...classInfo, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
          Type:
          <input
            name="type"
            type="text"
            value={classInfo.type}
            onChange={onChange}
          />
        </label>

        <label>
          Start time:
          <input
            name="time"
            type="text"
            value={classInfo.time}
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
            name="intensity"
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
            type="number"
            value={classInfo.attendees}
            onChange={onChange}
          />
        </label>
        <label>
          Max class size:
          <input
            name="size"
            type="number"
            value={classInfo.max_size}
            onChange={onChange}
          />
        </label>
      </form>
    </>
  );
};

export default Classform;
