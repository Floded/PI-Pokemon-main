import { Route, useLocation } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { Detail, Form, Home, Landing } from "./views";

function App() {
  const location = useLocation();

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
