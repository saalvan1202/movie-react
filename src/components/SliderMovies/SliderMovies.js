import React from "react";
import "./SliderMovies.scss";

import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
export default function SliderMovies(props) {
  const { Movies } = props;
  console.log(Movies);
  if (Movies.loading || !Movies.result) {
    return "Loading...";
  }
  const { results } = Movies.result;
  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <Carousel autoplay className="slider-movies-ground"></Carousel>
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  return (
    <div
      className="slider-movies_movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies_movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver mas </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
