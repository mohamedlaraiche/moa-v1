import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <div className="details">
        <h1>
          Hi there &#128075; ;<br />
          I&apos;m Mohamed a Front-end Developer. Passioned developer like to
          explore new tech and build stuff.
        </h1>
        <div className="links">
          <Link to="/projects">Projects</Link>
          <a
            href="https://shorturl.at/dfAD9"
            target="_blank"
            download={true}
            className="contactLink">
            Resume
          </a>
        </div>
      </div>
      <div className="imgHolder">
        <img src="./assets/logo.png" alt="MOA LOGO" />
      </div>
    </div>
  );
};

export default Home;
