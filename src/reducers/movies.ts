import { Action, Reducer } from 'redux';
import topRatedData from '../topRated.json';

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  voteAverage: number;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: topRatedData.results.map((result: any) => ({
    id: result.id,
    title: result.title,
    popularity: result.popularity,
    overview: result.overview,
    voteAverage: result.vote_average,
  })),
};

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
