import React, { useEffect, useState } from "react";
import SeatsGrid from "./SeatsGrid";
import "./SeatsGrid.css"


const MovieBooking = () => {


    const generateSeats = (count) => {
        return Array.from({ length: count }, (_, index) =>` ${index + 1}`);
      };

    const [movies] = useState([
        { id: 1, title: "Leo", ticketPrice:150 },
        { id: 2, title: "Aylaan",ticketPrice:120 },
        { id: 3, title: "CaptainMiller",ticketPrice:120 },
        { id: 4, title: "The Fight Club",ticketPrice:100},
      ]);

      const [screens] = useState([
        { id: 1, movieId:1, name: "Screen 1", availableSeats: generateSeats(40) },
        { id: 2, movieId:2, name: "Screen 2", availableSeats: generateSeats(40) },
        { id: 3, movieId:3, name: "Screen 3", availableSeats: generateSeats(30) },
        { id: 4, movieId:4, name: "Screen 4", availableSeats: generateSeats(40) },
        { id: 5, movieId:1, name: "Screen 5", availableSeats: generateSeats(25) },
        { id: 6, movieId:2, name: "Screen 6", availableSeats: generateSeats(25) },
        { id: 7, movieId:3, name: "Screen 7", availableSeats: generateSeats(50) },
      ]);

  

      const [selectedMovie, setSelectedMovie] = useState(null);
      const [selectedScreen, setSelectedScreen] = useState(null);
      const [selectedSeats,setSelectedSeats] = useState([]);
      const [reservedSeats,setReservedSeats] = useState([]);
 

      const handleMovieChange = (movie) => {

        setSelectedMovie(movie);
        setSelectedScreen(null);
        setSelectedSeats([]);
        setReservedSeats([]);
         
      };

      const handleScreenChange = (screen) => {

        setSelectedScreen(screen);
        setSelectedSeats([]);
        setReservedSeats([]);

      };

 

      const handleSeatClick = (seat) => {
        
        console.log(`Seat ${seat} clicked!`);


          if (selectedSeats.includes(seat)) {
              setSelectedSeats((prevSelectedSeats) =>
                prevSelectedSeats.filter((s) => s !== seat)
              );
            } else {
              setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat]);
            }

          };


      const handleBookingSubmit = () => {
      
        console.log("Submitting Seats", selectedSeats);
            
            setReservedSeats([...reservedSeats, ...selectedSeats]);
            setSelectedSeats([])

            // Update reservedSeats state for visualization purposes
            setReservedSeats((prevReservedSeats) => [
                ...prevReservedSeats,
                ...selectedSeats,
              ]);
          
              

              // Clear selectedSeats after submission
              setSelectedSeats([]);
              
          }

          useEffect(() => {

            window.scrollTo(0,0);
            
          },[]);
      
      

  return (
    <div className="heading " >


        <h3 className="head">Movie Booking System</h3>

        <label class="label">Select a Movie</label>


        <select className="col-3" id="sri" onChange={(e) => handleMovieChange(JSON.parse(e.target.value))}>
          <option value="" hidden>Select a Movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={JSON.stringify(movie)}>
              {movie.title}
            </option>
          ))}
        </select>



        {selectedMovie && (
          <div className="screenselect">

            <label className="label">Select a Screen</label>

            <select className="col-3" id="sri"
              onChange={(e) => handleScreenChange(screens.find((screen) => screen.movieId === selectedMovie.id && screen.id === parseInt(e.target.value)))}>

              <option value="" hidden>Select a Screen</option>
              {screens
                .filter((screen) => screen.movieId === selectedMovie.id)
                .map((screen) => (
                  <option key={screen.id} value={screen.id}>
                    {screen.name}
                  </option>
                ))}

            </select>
          </div>
        )}


        {selectedScreen && selectedMovie && (
          <div className="description">
            <h4>
              Available Seats for <span className="sri">{selectedMovie.title}</span> at {selectedScreen.name}
            </h4>
            <SeatsGrid
              seats={selectedScreen.availableSeats}
              selectedSeats={selectedSeats}
              reservedSeats={reservedSeats}
              onSeatClick={handleSeatClick}
            />
            
            {selectedMovie && (
              <button type="submit" className="button" onClick={handleBookingSubmit}>Confirm Booking</button>
              
            )}
          
            <h5 className="detail">Booking for <span className="sri">{selectedMovie.title}</span> at {selectedScreen.name} with Seat Numbers : <span className="sri">{selectedSeats.join(", ")}</span> and Total rate of <span className="sri">₹{selectedSeats.length * selectedMovie.ticketPrice}</span></h5>
          </div>
          
        )}
       
</div>
);
};

export default MovieBooking;