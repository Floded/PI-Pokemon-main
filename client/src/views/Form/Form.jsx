import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreate } from "../../redux/actions";
import style from "./Form.module.css";

const stringRegExp = /^[a-zA-Z]{1,20}$/;
const numberRegExp = /^([1-9][0-9]{0,2}|1000)$/;

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
  // console.log(createPokemon);

  const validate = (form) => {
    switch (form) {
      case form.name:
        if (!form.name) setError({ ...error, name: "Name is required" });
        break;

      default:
        break;
    }
    // if (!form.name) {
    //   setError({ ...error, name: "Name is required" });
    // } else if (form.name.length > 15) {
    //   setError({ ...error, name: "Exceeds the 15 characters allowed" });
    // } else if (!stringRegExp.test(form.name)) {
    //   setError({ ...error, name: "Name is invalid" });
    // }

    // if (!numberRegExp.test(form.health)) {
    //   setError({ ...error, health: "Health is invalid" });
    // } else if (form.health > 99) {
    //   setError({ ...error, health: "exceed health limit" });
    // }
    // if (!numberRegExp.test(form.defending)) {
    //   setError({ ...error, defending: "Defending is invalid" });
    // } else if (form.defending > 99) {
    //   setError({ ...error, defending: "exceed defending limit" });
    // }
    // if (!numberRegExp.test(form.stroke)) {
    //   setError({ ...error, stroke: "Stroke is invalid" });
    // } else if (form.stroke > 99) {
    //   setError({ ...error, stroke: "exceed stroke limit" });
    // }
    // if (!numberRegExp.test(form.speed)) {
    //   setError({ ...error, speed: "Speed is invalid" });
    // } else if (form.speed > 99) {
    //   setError({ ...error, speed: "exceed speed limit" });
    // }
  };
  // Exceeds the 15 characters allowed
  const handleChange = (event) => {
    const { value, name } = event.target;
    validate({ ...form, [name]: value });
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
    alert("Pokemon created");
  };

  // solucionar la creacion del nuevo pokemon desde el action/redux

  return (
    <form onSubmit={submitHandler} className={style.ContainerForm}>
      <div></div>
      <div>
        <h2>Crea tu propio Pokemón</h2>
      </div>
      <div>
        <label>Name </label>
        <input
          type="text"
          name="name"
          placeholder="Example.."
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
          placeholder="default_image.png"
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
        {error.health && <span>{error.health}</span>}
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
        {error.defending && <span>{error.defending}</span>}
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
