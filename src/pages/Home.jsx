import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/Home.css"

function Home() {
  const navigate = useNavigate();

  const SsbuGo = () => {
    navigate("/SsbuHome");
  }
  const Sf6Go = () => {
    navigate("/Sf6Home");
  }
  const T8Go = () => {
    navigate("/Tekken8Home");
  }
  const Mk1Go = () => {
    navigate("/Mk1Home");
  }
  return (
    <div className="page">
      <Header />
      <div className="title">
        <h1 className="main-text">Welcome to Fight Hub</h1>
      </div>
      <button className="button smash" onClick={SsbuGo}>Go to Smash Bros Ultimate page</button>
      <button className="button sf6" onClick={Sf6Go}>Go to Street Fighter 6 page</button>
      <button className="button tekken" onClick={T8Go}>Go to Tekken 8 page</button>
      <button className="button mk1" onClick={Mk1Go}>Go to Mortal Kombat 1 page</button>
      <Footer />
    </div>
  );
}

export default Home;