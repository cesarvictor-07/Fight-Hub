import Header from "../../components/Header";
import Footer from "../../components/Footer"
import "./Info.css";

function Info() {
  return (
    <>
      <Header />
      <section className="privacy-section">
        <h1>Privacy Policy</h1>
        <h2>Last updated: 12/02/2026</h2>
        <p>In this web we only collect the data that the user gives voluntarely like name and email on forms</p>
        <p>The data is simply used to answer queries and handle the functioning of the place</p>
        <p>We don't share your information with any other companies and it's not used for commercial purposes</p>
      </section>
      <section className="cookies-section">
        <h1>Cookies Policy</h1>
        <h2>Last updated: 12/02/2026</h2>
        <p>This website may make use of necessary technnical cookies to work properly, and in that case, analysis cookies like Google Analytics to improve user experience.</p>
        <p>The user can accept or decline the cookies from their browser.</p>
        <p>The cookies don't collect any personal information that might be sensible.</p>
      </section>
      <section className="terms-section">
        <h1>Terms & Conditions</h1>
        <h2>Last updated: 12/02/2026</h2>
        <p>The use of this web implies the acceptance of these conditions.</p>
        <p>The content of this web is for educational purposes and is part of a project.</p>
        <p>A bad use of this information is completely prohibited, aswell as any activity that can harm the functioning of the place.</p>
      </section>
        <h3>This text was made with ai* and translated by hand</h3>
      <Footer />
    </>
  );
}

export default Info;