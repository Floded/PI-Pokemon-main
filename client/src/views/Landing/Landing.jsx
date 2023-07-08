// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Landing = () => {
  const navigate = useHistory();
  const goHome = () => {
    navigate.push("/home");
  };
  return (
    <div>
      <h1>Landing</h1>
      <h2>
        Proyecto Individual desarrollado por <b>Luis Lillo</b>.
      </h2>
      <button onClick={goHome}>
        <span>Go Home Page</span>
      </button>
    </div>
  );
};

export default Landing;
