import "./News.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../components/img/Fight-Hub.png";
import alex from "../../components/img/sf6-character-imgs/Sf6alexrender.webp";
import { useState, useEffect } from "react";
import { getNews, subscribeToNews } from "../../services/fb/news-service";
import { importNews } from "../../services/fb/import-service";

function News() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToNews(setNewsList);
    return () => unsubscribe();
  }, []);

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
      < Header />
      <main className="news-section">
        <img className="logo-img" src={logo} alt="Fight Hub Logo" onClick={GoHome} />
        <h1 className="h1-text">Welcome to Fight Hub's news!</h1>
        <section className="news-container">
          {newsList.map(news => (
            <div key={news.id} className="news-card">

              <h3>{news.title}</h3>

              {news.imageUrl && (
                <img className="news-img" src={news.imageUrl} alt="news" />
              )}

              <p>{news.content}</p>

            </div>
          ))}
        </section>
        <input
          className="import-button"
          type="file"
          accept=".json,.csv,.xml,.xlsx,.xls,.ods"
          onChange={(e) => importNews(e.target.files[0])}
        />
      </main>
      <Footer />
    </div>
  );
}

export default News;