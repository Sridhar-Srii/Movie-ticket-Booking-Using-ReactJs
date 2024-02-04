import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import MovieBooking from "./MovieBooking";
import Register from "./Register";


function App() {


    



  return (
    <div className="App">
     

   

      <Routes>

      <Route path="/" element={<Login></Login>}></Route>

      <Route path="/Register" element={<Register></Register>} />

      <Route path="/Moviebooking" element={<MovieBooking></MovieBooking>}></Route>
      
      </Routes>

    

     

    </div>
  );
}

export default App;
