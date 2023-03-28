import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { GetMovieById } from "../../Services/Api";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const { movieId } = useParams();
    console.log("MovieDetails  MovieId:", movieId)

    useEffect(() => {
        GetMovieById(movieId)
            .then(movie => {
                console.log(movie)
                setMovieDetails(movie)
            })
            .catch(error => console.log(error))
    }, [movieId])

    const { title, release_date, poster_path } = movieDetails;

    return (
        <div>
            <h1>{title} ({release_date})</h1>
            <img src={poster_path} alt={title} width="200" />
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MovieDetails;