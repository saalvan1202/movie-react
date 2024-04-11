import React from "react";
//Componenetes
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MovieList.scss";
import { RightOutlined } from "@ant-design/icons";
export default function MovieList(props) {
  const { PopularMovie, title } = props;
  if (PopularMovie.loading || !PopularMovie.result) {
    return <Loading />;
  }
  const { results } = PopularMovie.result;
  return (
    <List
      className="movie-list"
      header={<div>{title}</div>}
      size="default"
      bordered
      dataSource={results}
      renderItem={(movie) => <MoviePopular movie={movie} />}
    ></List>
  );
}

function MoviePopular(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <List.Item className="movie-list_movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
}
