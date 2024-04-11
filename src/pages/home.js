import React from "react";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, OPTIONS } from "../utils/constans";
import "./home.scss";
export default function Home() {
  const newMovie = useFetch(
    `${URL_API}/movie/now_playing?language=en-US&page=1`,
    OPTIONS
  );
  console.log(newMovie);
  return (
    //Vamos a pasar por props las peliculas a Slider
    //Para que el componente puesa ser reutilizable
    <>
      <SliderMovies Movies={newMovie} />
    </>
  );
}
