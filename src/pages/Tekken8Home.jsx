import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Tekken8Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <h1 className="title-text">Tekken 8</h1>
      <ul>
        <li>Kazuya Mishima</li>
        <li>Jin Kazama</li>
        <li>Heihachi Mishima</li>
        <li>Yoshimitsu</li>
      </ul>
      <button className="button home" onClick={handleClick}>Go back to home page</button>
      <Footer />
    </>
  );
}

export default Tekken8Home;