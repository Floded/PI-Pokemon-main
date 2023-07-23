import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { Loading } from "../../components/Loading/Loading";
import { getAllPokemon, getOldPokemon, getType } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  // // Cuando se monte, debe hacer el dispatch,

  useEffect(() => {
    dispatch(getAllPokemon());
    dispatch(getOldPokemon());
    dispatch(getType());
    setLoading(false); // Revisar el loading por que no esta funcionando
  }, [dispatch]);

  return (
    <div className={style.ContainerHome}>
      <h1>POKEDEX</h1>
      {loading ? <Loading /> : <CardsContainer />}
    </div>
  );
};

export default Home;
