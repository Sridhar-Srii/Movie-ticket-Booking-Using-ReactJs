import React from "react";
import "./SeatsGrid.css"
const SeatsGrid = ({ seats,reservedSeats,selectedSeats,onSeatClick }) => {

       


  return (
    <div>
      


      <div className="main">
          
        <div class='box box--red'></div>
        <p className="p">Reserved</p>

        <div class='box box--green'></div>
        <p className="p">Selected</p>

        <div class='box box--yellow'></div>
        <p className="p">Available</p>
        
      </div>
      
     
      
      <div className="seats-grid">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${
                selectedSeats.includes(seat)
                  ? "selected" : ""}
                 ${reservedSeats.includes(seat) ? "reserved" : ""}`}
            onClick={() => onSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatsGrid;