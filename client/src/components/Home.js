import React, { useEffect, useState } from "react";
import pic1 from "../image/home1.png";
import pic2 from "../image/home2.png";
import hello from "../image/hello.png";
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const homeUserName = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    homeUserName();
  }, []);

  return (
    <>
      <div className="home-page">
          <div className="home-div">
            <p className="pt-5">WELCOME</p>
            <h1>{userName}</h1>
            <h2>
              {show ? "Happy to see you back!" : "Create your profile now"}
            </h2>
          </div>
          <div style={{ display: "flex", minHeight: "40vh" }}>
            <img
              src={pic2}
              alt="img1"
              style={{
                width: "18%",
                position: "absolute",
                top: "80%",
                left: "10%",
                transform: "translateY(-50%)",
              }}
            />
            <img
              src={show ? hello : pic1}
              alt="img2"
              style={{
                width: "20%",
                position: "absolute",
                top: "80%",
                right: "10%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
      </div>

      <footer className="footer">
      <div className="social-icons">
        <NavLink to="https://www.linkedin.com/in/ankita-talukdar-3569a5280/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </NavLink>
        <NavLink to="https://github.com/AnkitaT721" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </NavLink>
        <NavLink to="https://www.instagram.com/_.ankita_t._/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </NavLink>
      </div>
      <p>© 2023 <span style={{color:'#007bff'}}>ProfilePalette</span>. All Rights Reserved.</p>
    </footer>

    </>
  );
};

export default Home;
