import { Route, useLocation } from "react-router-dom";
import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import { getAllPokemon, getOldPokemon, getType } from "./redux/actions";
import { Detail, Form, Home, Landing } from "./views";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon());
    dispatch(getOldPokemon());
    dispatch(getType());
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
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
