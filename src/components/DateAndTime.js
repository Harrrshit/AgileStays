import React from 'react'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

function DateAndTime() {
    
    return (
        <div className = "datetime_section">
            <div className = "datetime__container">
            <div className="arrival_date">  
                <h3>Arrival Date</h3>
                <Datetime/>
            </div>
            <div className="departure_date">
            <h3>Departure Date</h3>
                <Datetime/>
            </div>
            <div className="number_of-persons">
                <h3>No. of Persons</h3>
                <input className= "form-control" type = "number"></input>
            </div>
        </div>
        <button type="button" className="btn btn-lg btn-dark btn__book">Book</button>
        </div>
    )
}

export default DateAndTime