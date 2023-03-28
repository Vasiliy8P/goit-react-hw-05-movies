import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { GetMovieById } from "../../Services/Api";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        GetMovieById(movieId)
            .then(movie => {
                setMovieDetails(movie)
            })
            .catch(error => console.log(error))
    }, [movieId])

    const { title, release_date, poster_path } = movieDetails;

    return (
        <div>
            <button>
                <Link to={backLinkHref} >Go back</Link>
            </button>
            <h1>{title} ({release_date})</h1>
            <img src={poster_path} alt={title} width="200" />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MovieDetails;