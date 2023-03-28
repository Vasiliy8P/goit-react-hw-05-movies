import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '3123e8450e42b4706d786efbc6b96d51';

export const GetTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
}

export const GetMovieById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
} 

export const GetMovieBySearchQuery = async (searchQuery) => {
    const response = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
    return response.data;
} 

export const GetMovieCast = async (id) => {
    const response = await axios.get(
        `movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const GetReviews = async (id) => {
    const response = await axios.get(
        `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
}
