import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Mk1Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <h1 className="title-text">Mortal Kombat 1</h1>
      <ul>
        <li>Scorpion</li>
        <li>Sub-Zero</li>
        <li>Johnny Cage</li>
        <li>Omniman</li>
      </ul>
      <button className="button home" onClick={handleClick}>Go back to home page</button>
      <Footer />
    </>
  );
}

export default Mk1Home;