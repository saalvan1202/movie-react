import React from "react";
import "./SliderMovies.scss";
//LOADING
import Loading from "../Loading";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
export default function SliderMovies(props) {
  const { Movies } = props;
  if (Movies.loading || !Movies.result) {
    return <Loading />;
  }
  const { results } = Movies.result;
  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movies_movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies_movie-info">
        <div className="slider-movies_movie-info-description">
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
