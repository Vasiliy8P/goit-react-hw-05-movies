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