import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./webpages/Home";
import { Hotel } from "./webpages/Hotel";
import { HotelList } from "./webpages/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
