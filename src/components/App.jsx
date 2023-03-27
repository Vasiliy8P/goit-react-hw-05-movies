import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";

const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 16,
      //   color: '#010101'
      // }}
    >
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      </main>
    </div>
  );
};

export default App;
