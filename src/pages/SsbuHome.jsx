import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function SsbuHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <h1 className="title-text">Super Smash Bros. Utlimate</h1>
      <ul>
        <li>Terry</li>
        <li>Ryu</li>
        <li>Kazuya</li>
        <li>K.rool</li>
      </ul>
      <button className="button home" onClick={handleClick}>Go back to home page</button>
      <Footer />
    </>
  );
}

export default SsbuHome;