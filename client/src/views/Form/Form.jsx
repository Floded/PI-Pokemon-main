import { useState } from "react";
import { postCreate } from "../../redux/actions";
import { useSelector } from "react-redux";
// import style from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
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

  const validate = (form) => {
    if (form.name.length > 15) {
      setError({ ...error, name: "Supera los 15 caracteres permitidos" });
    } else {
      setError({ ...error, name: "" });
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // console.log(value);
    validate({ ...form, [name]: value });
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const typeSplitted = form.type.split(",").map((ty) => ty.trim());
    form.type = typeSplitted;
    postCreate(form);
  };

  // solucionar el parametro type para enviar el formulario
  // solucionar la creacion del nuevo pokemon desde el action/redux

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Crea tu propio Pokemón</h2>
      </div>
      <div>
        <label htmlFor="">Name </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label htmlFor="">Image </label>
        <input
          type="file"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Health </label>
        <input
          type="number"
          name="health"
          value={form.health}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Stroke </label>
        <input
          type="number"
          name="stroke"
          value={form.stroke}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Defending </label>
        <input
          type="number"
          name="defending"
          value={form.defending}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Speed </label>
        <input
          type="number"
          name="speed"
          value={form.speed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Height </label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Weigh </label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Type </label>
        {types.map((type) => (
          <div key={type.id}>
            <input
              type="checkbox"
              name="type"
              value={type.name}
              onChange={handleChange}
            />
            <label htmlFor="">{type.name}</label>
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
