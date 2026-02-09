import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Sf6Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <h1 className="title-text">Street Fighter 6</h1>
      <ul>
        <li>Luke</li>
        <li>Jamie</li>
        <li>Alex</li>
        <li>Ryu</li>
      </ul>
      <button className="button home" onClick={handleClick}>Go back to home page</button>
      <Footer />
    </>
  );
}

export default Sf6Home;