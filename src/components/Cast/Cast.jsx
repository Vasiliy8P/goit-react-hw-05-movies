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
                : (<div>
                    <ul>
                        {movieCast.map(actor => (
                            <li key={actor.id}>{actor.name}</li>
                        ))}
                    </ul>
                </div>)
            }
        </div>        
    )
}

export default Cast;