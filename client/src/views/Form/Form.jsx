import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";

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
    // type: "",
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
    // type: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newPokemon = { ...form, [name]: value };
    setForm(newPokemon);
    // console.log(newPokemon);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <div>
        <h2>Crea tu propio Pokemón</h2>
      </div>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          value={form.Image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Health</label>
        <input
          type="number"
          name="health"
          value={form.health}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Stroke</label>
        <input
          type="number"
          name="stroke"
          value={form.stroke}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Defending</label>
        <input
          type="number"
          name="defending"
          value={form.defending}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Speed</label>
        <input
          type="number"
          name="speed"
          value={form.speed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Height</label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Weight</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Type</label>
        <input type="text" value={form.type} />
      </div>
      <div>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
