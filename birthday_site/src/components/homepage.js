import "../styles/homepage.css";
import Confetti from "./confetti";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
   navigate('/mail')
}

  return (
    <>
        <div className="main__container">
          <div className="typewriter">
            <h1>Happy birthday love</h1>
          </div>
        <div className="button__container">
          <Confetti />
          <button onClick={handleClick}>Click Me</button>
          </div>
        </div>
    </>
  );
};

export default Homepage;
