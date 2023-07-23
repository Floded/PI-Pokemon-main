import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getById } from "../../redux/actions";

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
      <div className={style.DetailContainer}>
        <h1>Detail to {pokemon.name}</h1>
      </div>
      <button onClick={backTo} className={style.BtnBack}>
        <span>Back</span>
      </button>
      <div className={style.NumberOfPokemon}>
        <span>Nº {pokemon.id}</span>
      </div>
      <div className={style.NamePokemon}>
        <h3>{pokemon.name}</h3>
      </div>
      <div className={style.ImgContainer}>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className={style.InfoPokemon}>
        <div className={style.Info}>
          <h4>Health: {pokemon.health}</h4>
        </div>
        <div className={style.Info}>
          <h4>Stroke: {pokemon.stroke}</h4>
        </div>
        <div className={style.Info}>
          <h4>Defending: {pokemon.defending}</h4>
        </div>
        <div className={style.Info}>
          <h4>Speed: {pokemon.speed}</h4>
        </div>
        <div className={style.Info}>
          <h4>Height: {pokemon.height}</h4>
        </div>
        <div className={style.Info}>
          <h4>Weight: {pokemon.weight}</h4>
        </div>
      </div>
      <div className={style.TypeInfo}>
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
