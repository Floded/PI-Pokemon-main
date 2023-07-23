import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreate } from "../../redux/actions";
import style from "./Form.module.css";

// const stringRegExp = /^[a-zA-Z]{1,20}$/;
// const numberRegExp = /^([1-9][0-9]{0,2}|1000)$/;

const Form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    image: "",
    health: 0,
    stroke: 0,
    defending: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
  });

  // const [types, setTypes] = useState([]);

  const [error, setError] = useState({
    name: "",
    image: "",
    health: "",
    stroke: "",
    defending: "",
    speed: "",
    height: "",
    weight: "",
    type: "",
  });

  const types = useSelector((state) => state.types);

  const createPokemon = useSelector((state) => state.createPokemon);
  console.log(createPokemon);

  // const validate = (form) => {
  //   if (form.name.length > 15) {
  //     setError({ ...error, name: "Supera los 15 caracteres permitidos" });
  //   } else {
  //     setError({ ...error, name: "" });
  //   }
  // };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // validate({ ...form, [name]: value });
    setForm({ ...form, [name]: value });
  };

  const handleTypeChange = (event) => {
    const { id } = event.target;
    console.log(id);
    setForm({ ...form, type: [...form.type, id] });
  };

  // se esta enviando con exito el formulario....
  const submitHandler = (event) => {
    console.log(form);
    event.preventDefault();
    dispatch(postCreate(form));
  };

  // solucionar la creacion del nuevo pokemon desde el action/redux

  return (
    <form onSubmit={submitHandler} className={style.ContainerForm}>
      <div>
        <h2>Crea tu propio Pokemón</h2>
      </div>
      <div>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label>Image </label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Health </label>
        <input
          type="number"
          name="health"
          value={form.health}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Stroke </label>
        <input
          type="number"
          name="stroke"
          value={form.stroke}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Defending </label>
        <input
          type="number"
          name="defending"
          value={form.defending}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Speed </label>
        <input
          type="number"
          name="speed"
          value={form.speed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Height </label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Weigh </label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Type </label>
        {types?.map((type) => (
          <div key={type.id}>
            <input
              type="checkbox"
              name="type"
              id={type.id}
              value={type.name}
              onChange={handleTypeChange}
            />
            <label>{type.name}</label>
          </div>
        ))}
      </div>
      <div>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
