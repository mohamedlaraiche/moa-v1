import { useState } from "react";
import { Link } from "react-router-dom";
import PRoutes from "./PRoutes";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const App = () => {
  const [menu, setMenu] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState("closeMenu");
  const closeMenuHandler = () => {
    setMenu(false);
    setMenuDisplay("closeMenu");
  };
  const openMenuHandler = () => {
    setMenu(true);
    setMenuDisplay("openMenu");
  };
  return (
    <div className="container">
      <header>
        <div className="logoHolder">
          <Link to="/" onClick={closeMenuHandler}>
            <img
              src="./assets/logo.png"
              alt="MOA Freelance logo"
              width="100px"
            />
          </Link>
        </div>
        <nav id={menuDisplay}>
          <Link to="/projects" onClick={closeMenuHandler}>
            Projects
          </Link>
          <Link to="/contact" onClick={closeMenuHandler}>
            Contact
          </Link>
        </nav>
        {menu ? (
          <AiOutlineClose onClick={closeMenuHandler} />
        ) : (
          <BiMenuAltLeft onClick={openMenuHandler} />
        )}
      </header>
      <section>
        <PRoutes />
      </section>
    </div>
  );
};

export default App;
