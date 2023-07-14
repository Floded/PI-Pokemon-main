import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const backTo = () => {
    navigate.push("/home");
  };

  const pokemon = useSelector((state) => state.pokemonId);

  return (
    <div>
      <h1>Detail to {pokemon.name}</h1>
      <button onClick={backTo}>
        <span>Back</span>
      </button>
      <div>
        <span>Nº {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
      </div>
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className={style.InfoPokemon}>
        <div>
          <h4>Health: {pokemon.health}</h4>
        </div>
        <div>
          <h4>Stroke: {pokemon.stroke}</h4>
        </div>
        <div>
          <h4>Defending: {pokemon.defending}</h4>
        </div>
        <div>
          <h4>Speed: {pokemon.speed}</h4>
        </div>
        <div>
          <h4>Height: {pokemon.height}</h4>
        </div>
        <div>
          <h4>Weight: {pokemon.weight}</h4>
        </div>
      </div>
      <div>
        {pokemon.types?.map((e) => {
          return (
            <span key={e.id} className={style.SpanContainer}>
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
