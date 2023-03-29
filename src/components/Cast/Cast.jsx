import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieCast } from "../../Services/Api";
import Loader from "components/Loader";

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [status, setStatus] = useState('idle')
    const { movieId } = useParams();

    useEffect(() => {
        setStatus('panding')

        GetMovieCast(movieId)
            .then(cast => {
                setMovieCast(cast.cast);
                setStatus('resolved');
            })
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <div>
            {status === 'panding'
                ? <Loader />
                : (<ul style={{ listStyle: "none" }}>
                        {movieCast.map(({id, name, character, profile_path}) => (
                            <li key={id}>
                                <img src={profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="120" />
                                <p><b>{name}</b></p>
                                <p>Character: {character}</p>

                            </li>
                        ))}
                    </ul>)
            }
        </div>        
    )
}

export default Cast;