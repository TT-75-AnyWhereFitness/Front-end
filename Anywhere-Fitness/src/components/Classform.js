import React, { useState } from 'react';

const initialState = {
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensity: "",
    location: "",
    attendees:"",
    size:"",
  };

const Classform = () => {

const [classInfo, setClassInfo] = useState(initialState)

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
            name="startTime"
            type="text"
            value={classInfo.startTime}
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
            value={classInfo.intensity}
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
            name="size"
            type="text"
            value={classInfo.size}
            onChange={onChange}
          />
        </label>
      </form>
    </>
  );
};

export default Classform;
