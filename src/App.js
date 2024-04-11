import React from "react";
import { Layout } from "antd";

//Libreriías react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Importamos la paginas para las rutas
import Home from "./pages/home";
import MovieNew from "./pages/movie-new";
import Movie from "./pages/movie";
import Popular from "./pages/popular";
import Error404 from "./pages/error404";
import Search from "./pages/search";

/*Importamos componentes*/
import MenuTop from "./components/MenuTop";
//Supones que las rutas se van a cambiar con el UseEfect(()=>{})
export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/movie-new" exact={true} element={<MovieNew />} />
            <Route path="/popular" exact={true} element={<Popular />} />
            {/*Para el error 404 englobamos todo con el "*" si no se encuentran
            ningunas de las rutas se ejecuta esa página*/}
            <Route path="*" exact={true} element={<Error404 />} />
            <Route path="/search" exact={true} element={<Search />} />
            {/* Pasamos una Route con parametro que cambian */}
            <Route path="/movie/:id" exact={true} element={<Movie />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}
