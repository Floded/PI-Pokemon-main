import { useSelector } from "react-redux";
import style from "./FilterBar.module.css";

export const FilterBar = () => {
  const type = useSelector((state) => state.types);
  //   const handleCheckbox = () => {};
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
                // onChange={"crear la funcion onChange"}
              />
              <label htmlFor={e.name}>{e.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
