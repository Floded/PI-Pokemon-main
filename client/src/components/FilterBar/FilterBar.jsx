import { useSelector } from "react-redux";
import style from "./FilterBar.module.css";
import { useState } from "react";

export const FilterBar = () => {
  const [eValue, setEValue] = useState([]);

  // const [pokeType, setPokeType] = useState([]);

  const type = useSelector((state) => state.types);

  const handleCheckbox = (event) => {
    const { name } = event.target;
    // console.log(name);
    setEValue(name);
  };
  // console.log(eValue);

  return (
    <div className={style.ContainerFilter}>
      <div className={style.filterByType}>
        <span>Type</span>
        {type.map((e) => {
          return (
            <div key={e.id}>
              <input
                type="checkbox"
                name={e.name}
                id={e.id}
                onChange={handleCheckbox}
              />
              <label htmlFor={e.name}>{e.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
