import "./News.css"
import Footer from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../components/img/Fight-Hub.png";
import alex from "../../components/img/sf6-character-imgs/Sf6alexrender.webp";
import { useEffect } from "react";

function News() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const GoHome = () => {
    navigate("/");
  }

  const GoSf6Fighters = () => {
    navigate("/street-fighter-6#fighters");
  }

  const GoSmashMech = () => {
    navigate("/super-smash-bros-ultimate#mechanics");
  }

  return (
    <div className="page">
      <main className="news-section">
        <img className="logo-img" src={logo} alt="Fight Hub Logo" onClick={GoHome} />
        <h1 className="h1-text">Welcome to Fight Hub's news!</h1>
        <section className="news-container">
          <div className="news-card">
            <h3>Alex, the newest addition to Street Fighter 6!</h3>
            <img className="news-img" src={alex} alt="Sf6 Alex" />
            <p>Alex has been added to our list of characters in the Street Fighter 6 page, check it out
              <a onClick={GoSf6Fighters}> here! </a>
              Or check out his official gameplay trailer
              <a href="https://www.youtube.com/watch?v=i1fqbyMXt1Y&pp=ygUZc2Y2IGFsZXggZ2FtZXBsYXkgdHJhaWxlcg%3D%3D" target="_blank" rel="noopener noreferrer"> here!</a>
            </p>
          </div>
          <div className="news-card">
            <h3>New Smash Bros. Ultimate content!</h3>
            <p>A tutorial video has been added in the Smash Ultimate mechanics section, check it
              <a onClick={GoSmashMech}> here!</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default News;