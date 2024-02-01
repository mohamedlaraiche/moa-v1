import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "80%",
  height: "auto",
  bgcolor: "#de2526",
  boxShadow: 24,
  p: 4,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = () => setOpen(false);
  const date = new Date().getFullYear();
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "gmail",
          "template_nzhcznj",
          form.current,
          "61V9kb_pDdVTZkeDp"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
      swal("Message has been sent");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="details">
          <h2> Contact me ! </h2>
          <p className="contactp">
            Let's make things Done !, contact me to share ideas, work together
            and build good stuff in the internet world !
          </p>
          <h5> contact@molaraiche.com</h5>
          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/mohamedlaraiche/"
              target="_blank">
              <BsLinkedin />
            </a>
            <a href="https://github.com/mohamedlaraiche" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-grp">
              <input
                type="text"
                required
                placeholder="Full Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-grp">
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-grp">
              <textarea
                cols="30"
                rows="8"
                placeholder="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}></textarea>
            </div>
            <div className="form-Btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <div className="messageHolder">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography
                style={{
                  margin: "20px",
                }}
                id="modal-modal-description"
                sx={{ mt: 2 }}
                className="messageSentSuccefully">
                Your message has been sent succecsfully, thank you !
              </Typography>
              <span onClick={handleClose} className="okBtn">
                Ok
              </span>
            </Box>
          </Modal>
        </div>
      </div>
      <p className="copyright">
        {" "}
        All right reserved &copy; <span className="date">{date} </span>
      </p>
    </>
  );
};

export default Contact;
