import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Navigation } from "swiper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1200,
  width: "80%",
  height: "auto",
  boxShadow: 24,
  p: 3,
  outline: "none",
  borderRadius: "10px",
};

const Projects = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleOpen = (projectId) => {
    setOpenProjectId(projectId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenProjectId(null);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("./db/db.json");
      const result = await response.data;
      setData(result);
    };

    getData();
  }, []);

  return (
    <>
      <div className="projects">
        <div className="main">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper">
            {data.map((links) => (
              <SwiperSlide
                onClick={() => handleOpen(links.id)}
                className="slider"
                key={links.id}>
                <img src={`/${links.image}`} alt="project cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <h4>
            Please note that the website backend used by
            <a href="https://render.com/" target="_blank" className="render">
              Render
            </a>
            free tier, so please give it few minutes and refresh so all data
            show for you. if there is any issue please don't hesitate to contact
            me to fix it
          </h4>
        </div>
      </div>
      {data.map((project) => (
        <Modal
          key={project.id}
          open={openProjectId === project.id}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className="closeProject">
              <button onClick={handleClose}>Close</button>
            </div>
            <div className="cart">
              <h2>{project.name} </h2>
              <div className="prjctDet">
                <img src={`/${project.image}`} alt={project.name} />

                <div className="txtLinks">
                  <p className="desc"> {project.description} </p>
                  <div className="links">
                    <a href={project.live} rel="noreferrer" target="_blank">
                      Live
                    </a>
                    <a href={project.github} rel="noreferrer" target="_blank">
                      Github
                    </a>
                  </div>
                </div>
              </div>

              <div className="tech">
                <p className="stack"> {project.stack.one} </p>
                <p className="stack"> {project.stack.two} </p>
                <p className="stack"> {project.stack.three} </p>
                <p className="stack"> {project.stack.four} </p>
              </div>
            </div>
          </Box>
        </Modal>
      ))}
    </>
  );
};

export default Projects;
