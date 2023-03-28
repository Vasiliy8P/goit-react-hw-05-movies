import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { GetMovieBySearchQuery } from '../../Services/Api';


const Movies = () => {
    const [movieBySearchQuery, setMovieBySearchQuery] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (values, actions) => {
        setSearchQuery(values.value)
    }

    useEffect(() => {
        if (searchQuery === '') {
            return
        }

        GetMovieBySearchQuery(searchQuery)
            .then(movie => {
                setMovieBySearchQuery(movie.results)
            })
            .catch(error => console.log(error));        
    }, [searchQuery])

    return (
        <div>
            <Formik
                initialValues={{ value: '' }}
                onSubmit={handleSubmit}
            >
                <Form className="SearchForm">                    
                    <Field
                        name="value"
                        // className="SearchForm-input"
                        type="text"
                        // autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                    <button type="submit" className="SearchForm-button">
                        Search
                    </button>
                </Form>
            </Formik>
            <ul>
                {movieBySearchQuery.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Movies;