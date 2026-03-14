import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Rss.css";

function Rss() {
  return (
    <div className="page">
      <Header />
      <main className="rss-section">
        <h1>RSS: Explore the most recent news about Fight Hub and the fighting game world!</h1>
        <div className="rss-container">
          <h2>Check some news through our feeds:</h2>
          <div className="feed-container">
            <section className="feed-card">
              <h4>Fight Hub news:</h4>
              <a className="feed-link" href="public/rss.xml" >Fight_Hub_News</a>
            </section>
            <section className="feed-card">
              <h4>Street Fighter 6 news:</h4>
              <a className="feed-link" href="https://www.streetfighter.com/6/es-es/news/all/1">SF6_News</a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Rss;