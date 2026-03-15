import "./News.css"
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../../components/img/Fight-Hub.png";
import alex from "../../components/img/sf6-character-imgs/Sf6alexrender.webp";

function News() {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/");
  }

  const GoSf6 = () => {
    navigate("/street-fighter-6");
  }

  const GoSmash = () => {
    navigate("/super-smash-bros-ultimate");
  }

  return (
    <div className="page">
      <main className="news-section">
        <img src={logo} alt="Fight Hub Logo" onClick={GoHome} />
        <h1 className="h1-text">Welcome to Fight Hub's news!</h1>
        <section className="news-container">
          <div className="news-card">
            <h3>Alex, the newest addition to Street Fighter 6!</h3>
            <img className="news-img" src={alex} alt="Sf6 Alex" />
            <p>Alex has been added to our list of characters in the Street Fighter 6 page, check it out
              <a onClick={GoSf6}> here! </a>
              Or check out his official gameplay trailer
              <a href="https://www.youtube.com/watch?v=i1fqbyMXt1Y&pp=ygUZc2Y2IGFsZXggZ2FtZXBsYXkgdHJhaWxlcg%3D%3D" target="_blank" rel="noopener noreferrer"> here!</a>
            </p>
          </div>
          <div className="news-card">
            <h3>New Smash Bros. Ultimate content!</h3>
            <p>A tutorial video has been added in the Smash Ultimate mechanics section, check it
              <a onClick={GoSmash}> here!</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default News;