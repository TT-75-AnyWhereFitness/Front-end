import React from "react"

// NEEDS PROPS FROM HOME TO MAKE CARDS FOR CLASSES

const Class = (props) => {
    const { card } = props;

    return (
        <div className="card" >
            <div className="card-body">
                <h3 className="card-title">{card.name}</h3>
                <p className="card-text"><b>Type:</b> {card.type}</p>
                <p className="card-text"><b>Time:</b> {card.time}</p>
                <p className="card-text"><b>Date:</b> {card.date}</p>
                <p className="card-text"><b>Duration:</b> {card.duration}</p>
                <p className="card-text"><b>Intensity:</b> {card.intensity}</p>
                <p className="card-text"><b>Location:</b> {card.location}</p>
                <p className="card-text"><b>Current Attending:</b> {card.currentSize}</p>
                <p className="card-text"><b>Max Class Size:</b> {card.maxSize}</p>
            </div>
        </div>
    )
}

export default Class

/* NEEDS TO DISPLAY:
    "time", "date", "duration", "type", "intensity", "location"

FOR FUNCTIONALITY:
    RSVP/UN-RSVP FOR CLASSES
    CANNOT RESERVE IF FULL
*/