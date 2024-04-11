import React from "react";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, OPTIONS } from "../utils/constans";
import MovieList from "../components/MovieList";
import { Row, Col } from "antd";
import Footer from "../components/Footer";
import "./home.scss";
export default function Home() {
  //Estamos llamando a las peliculas más recientes de las API
  const newMovie = useFetch(
    `${URL_API}/movie/now_playing?language=en-US&page=1`,
    OPTIONS
  );

  const PopularMovie = useFetch(
    `${URL_API}/movie/popular?language=en-US&page=1`,
    OPTIONS
  );

  const TopMovie = useFetch(
    `${URL_API}/movie/top_rated?language=en-US&page=1`,
    OPTIONS
  );
  return (
    //Vamos a pasar por props las peliculas a Slider
    //Para que el componente puesa ser reutilizable
    <>
      <SliderMovies Movies={newMovie} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" PopularMovie={PopularMovie} />
        </Col>
        <Col span={12}>
          <MovieList title="Peliculas TOP" PopularMovie={TopMovie} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
