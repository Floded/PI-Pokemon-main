import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getAllPokemon, getType } from "../../redux/actions";
// import { FilterBar } from "../../components/FilterBar/FilterBar";

const Home = (props) => {
  // console.log(props.pokeName);
  const dispatch = useDispatch();
  // // Cuando se monte, debe hacer el dispatch,
  useEffect(() => {
    dispatch(getAllPokemon());
    dispatch(getType());
  }, [dispatch]);

  return (
    <div>
      {/* <FilterBar /> */}
      <h1>POKEDEX</h1>
      <CardsContainer pokeName={props.pokeName} />
    </div>
  );
};

export default Home;
