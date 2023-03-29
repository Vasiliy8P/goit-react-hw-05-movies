import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetReviews } from "../../Services/Api";
import Loader from "components/Loader";

const Reviews = () => {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const [status, setStatus] = useState('idle')
    const { movieId } = useParams();

    useEffect(() => {
        setStatus('panding')

        GetReviews(movieId)
            .then(review => {                
                setReviewsMovie(review.results);
                setStatus('resolved');
            })
            .catch(error => console.log(error));
    }, [movieId]);

    if(status === 'panding') {
        return <Loader />
    } else if (reviewsMovie.length === 0) {
        return (<p>We don't have any reviews for this movie.</p>)
    }

    return (
        <ul>
            {reviewsMovie.map(review => (
                <li key={review.id}>
                    Author: {review.author}
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
         
            // {reviewsMovie.length !== 0
            //     ? (<ul>
            //         {reviewsMovie.map(review => (
            //             <li key={review.id}>
            //                 Author: {review.author}
            //                 <p>{review.content}</p>
            //             </li>
            //         ))}
            //     </ul>)
            //     : <p>We don't have any reviews for this movie.</p>
            // }
}

export default Reviews;