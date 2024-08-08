import { useState } from "react";
import Navbar from "./navbar";
import Main from "./main";
import Results from "./found-results";
import Box from "./box";
import MovieList from "./movie-list";
import Summary from "./watched-summary";
import AlreadyWatchMovies from "./watched-movies-list";
import { tempMovieData, tempWatchedData } from "../data";
function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div>
      <Navbar>
        <Results movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <AlreadyWatchMovies watched={watched} />
        </Box>
      </Main>
    </div>
  );
}
export default App;
