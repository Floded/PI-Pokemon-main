import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { Loading } from "../../components/Loading/Loading";
import style from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  // // Cuando se monte, debe hacer el dispatch,

  useEffect(() => {
    setLoading(false); // Revisar el loading por que no esta funcionando
  }, [dispatch]);

  return (
    <div className={style.ContainerHome}>
      <div>
        <img
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt=""
        />
      </div>
      {loading ? <Loading /> : <CardsContainer />}
    </div>
  );
};

export default Home;
