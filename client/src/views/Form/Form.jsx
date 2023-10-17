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
    if (!form.name) {
      setError({ ...error, name: "Name is required" });
      return false;
    }
    if (form.name.length > 15) {
      setError({ ...error, name: "Exceed the limit" });
      return false;
    }

    if (!Number(form.health)) {
      setError({ ...error, health: "Health is invalid" });
      return false;
    }
    if (form.health > 99) {
      setError({ ...error, health: "exceed health limit" });
      return false;
    }
    if (!numberRegExp.test(form.defending)) {
      setError({ ...error, defending: "Defending is invalid" });
      return false;
    }
    if (form.defending > 99) {
      setError({ ...error, defending: "exceed defending limit" });
      return false;
    }
    if (!numberRegExp.test(form.stroke)) {
      setError({ ...error, stroke: "Stroke is invalid" });
      return false;
    }
    if (form.stroke > 99) {
      setError({ ...error, stroke: "exceed stroke limit" });
      return false;
    }
    if (!numberRegExp.test(form.speed)) {
      setError({ ...error, speed: "Speed is invalid" });
      return false;
    }
    if (form.speed > 99) {
      setError({ ...error, speed: "exceed speed limit" });
      return false;
    }
    return true;
  };
  // Exceeds the 15 characters allowed
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleTypeChange = (event) => {
    const { id } = event.target;

    setForm({ ...form, type: [...form.type, id] });
  };

  // se esta enviando con exito el formulario....
  const submitHandler = (event) => {
    event.preventDefault();
    setForm({
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
    // console.log(form);
    const isFormValid = validate(form);
    if (isFormValid) {
      dispatch(postCreate(form));
    }
  };

  // solucionar la creacion del nuevo pokemon desde el action/redux

  return (
    <form onSubmit={submitHandler} className={style.Form}>
      <div className={style.ContainerForm}>
        <div className={style.IntroCreated}>
          <h2>Crea tu propio Pokemón</h2>
        </div>
        <div className={style.StatsAllInfo}>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Name </label>
              <input
                className={style.inputStats}
                type="text"
                name="name"
                placeholder="Example.."
                value={form.name}
                onChange={handleChange}
              />
            </div>
            {error.name && <span>{error.name}</span>}
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Image </label>
              <input
                className={style.inputStats}
                type="text"
                name="image"
                placeholder="default_image.png"
                value={form.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Health </label>
              <input
                className={style.inputStats}
                type="number"
                name="health"
                value={form.health}
                onChange={handleChange}
              />
            </div>
            {error.health && <span>{error.health}</span>}
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Stroke </label>
              <input
                className={style.inputStats}
                type="number"
                name="stroke"
                value={form.stroke}
                onChange={handleChange}
              />
            </div>
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Defense </label>
              <input
                className={style.inputStats}
                type="number"
                name="defending"
                value={form.defending}
                onChange={handleChange}
              />
            </div>
            {error.defending && <span>{error.defending}</span>}
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Speed </label>
              <input
                className={style.inputStats}
                type="number"
                name="speed"
                value={form.speed}
                onChange={handleChange}
              />
            </div>
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Height </label>
              <input
                className={style.inputStats}
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
              />
            </div>
          </div>
          <div classname={style.inputContainer}>
            <div className={style.labelAndInput}>
              <label>Weigh </label>
              <input
                className={style.inputStats}
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={style.TypeContainer}>
          <div>
            <label className={style.LabeType}>Type :</label>
          </div>
          {types?.map((type) => (
            <div key={type.id} className={style.CheckboxType}>
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
          <button type="submit" className={style.BtnContainer}>
            <span>Submit</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
