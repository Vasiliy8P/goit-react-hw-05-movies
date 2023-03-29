import { Suspense, useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { GetMovieById } from "../../Services/Api";
import Loader from "components/Loader";
import "./MovieDetails.css";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        GetMovieById(movieId)
            .then(movie => {
                setMovieDetails(movie);
            })
            .catch(error => console.log(error))
    }, [movieId]);

    const { title, release_date, poster_path, vote_average, overview, genres } = movieDetails;

    return (
        <div>
            <button>
                <FiArrowLeft />
                <Link to={backLinkHref}>Go back</Link>
            </button>
            <div className="CardMovie">
                <img src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="250" />
                <div>
                    <h1>{title} ({release_date && release_date.slice(0, 4)})</h1>
                    <p>User score: {vote_average && vote_average.toFixed(1)}</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul className="Genres">
                        {genres && (genres.map(({id, name}) =>
                            <li key={id}>{name}</li>
                        ))}
                    </ul> 
                </div>
            </div>           
            
            <p>Additional information:</p>
            <ul>
                <li>
                    <Link to="cast" state={{ from: backLinkHref }}><b>Cast</b></Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: backLinkHref }}><b>Reviews</b></Link>
                </li>
            </ul>
            <Suspense fallback={<div><Loader /></div>}>
                <Outlet />
            </Suspense>            
        </div>
    )
}

export default MovieDetails;