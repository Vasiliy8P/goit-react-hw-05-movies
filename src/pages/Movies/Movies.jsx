import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { GetMovieBySearchQuery } from '../../Services/Api';


const Movies = () => {
    const [movieBySearchQuery, setMovieBySearchQuery] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchQuery = searchParams.get("query") ?? "";

    useEffect(() => {
        if (searchQuery === "") {
            return
        }

        GetMovieBySearchQuery(searchQuery)
            .then(movie => {
                setMovieBySearchQuery(movie.results)
            })
            .catch(error => console.log(error));
    }, [searchQuery]);

    const handleSubmit = (values, { resetForm }) => {
        setSearchParams({ query: values.value });
        resetForm();
    }    

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
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Movies;