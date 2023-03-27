import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetTrendingMovies } from "../../Services/Api";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        GetTrendingMovies()
            .then(movies => {
                setTrendingMovies(movies.results);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <ul>
                {trendingMovies.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;