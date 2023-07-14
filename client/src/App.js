import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Home, Form, Detail, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "./redux/actions";

function App() {
  // const [pokemonName, setPokemonName] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const pokeName = useSelector((state) => state.pokemonName);

  // console.log(pokeName);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home pokeName={pokeName} />
      </Route>
      <Route path="/detail/:id">
        <Detail />
      </Route>
      <Route path="/create">
        <Form />
      </Route>
    </div>
  );
}

export default App;
