import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import MoviesData from "./components/Movies";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState(MoviesData);
  const handleSearch = (searchQuery) => {
    const filteredMovies = MoviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="App">
      <Nav handleSearch={handleSearch} />
      <br />
      <br />
      <br />
      <MoviesList data={movies} />
      <AddMovie movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
