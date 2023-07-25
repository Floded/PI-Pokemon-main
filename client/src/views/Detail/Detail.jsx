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
    <div className={style.ContainerDetail}>
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
        <div className={style.ContaninerGlobal}>
          <h3>Stats</h3>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Health</span>
              <span className={style.Amount}>{pokemon.health}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Health}></div>
            </div>
          </div>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Stroke</span>
              <span className={style.Amount}>{pokemon.stroke}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Stroke}></div>
            </div>
          </div>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Defense</span>
              <span className={style.Amount}>{pokemon.defending}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Defending}></div>
            </div>
          </div>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Speed</span>
              <span className={style.Amount}>{pokemon.speed}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Speed}></div>
            </div>
          </div>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Height</span>
              <span className={style.Amount}>{pokemon.height}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Height}></div>
            </div>
          </div>
          <div className={style.Stats}>
            <div className={style.DetailStats}>
              <span>Weight</span>
              <span className={style.Amount}>{pokemon.weight}</span>
            </div>
            <div className={style.Menu}>
              <div className={style.Weight}></div>
            </div>
          </div>
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
      <button onClick={backTo} className={style.BtnBack}>
        <span>Back</span>
      </button>
    </div>
  );
};

export default Detail;
