import { Routes, Route } from "react-router-dom";
import AllMoviesPage from "./pages/all-movies-page.jsx";
import MovieDetailsPage from "./pages/movie-details-page.jsx";
import Navbar from "./components/navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="text-foreground">
      <Navbar />
      <div className=" pb-6">
        <Routes>
          <Route path="/" element={<AllMoviesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
