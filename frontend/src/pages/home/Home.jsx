import React from "react";
import Home from "./home.module.css";
import { Link } from "react-router-dom";


const HomePage = () => {
    function social_link(id_no) {
        switch (id_no) {
            case 0: {
                return (window.location.href =
                    "https://www.facebook.com/profile.php?id=100055850841945");
            }
            case 1: {
                return (window.location.href = "https://twitter.com/shubhrad1");
            }
            case 2: {
                return (window.location.href =
                    "https://www.instagram.com/shubhrad.01/");
            }
            case 3: {
                return (window.location.href =
                    "https://www.linkedin.com/in/shubhradeepdas/");
            }
            case 4: {
                return (window.location.href = "https://github.com/shubhrad1");
            }
            default: {
                return 0;
            }
        }
    }
    return (
        <div className={Home.body}>
           

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />

            <div className={Home.header}>
                Shubhradeep Das<font color="#0FFF50">.</font>
            </div>
            <div className={Home.social}>
                <ul>
                    <li onClick={() => social_link(0)}>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                    <li onClick={() => social_link(1)}>
                        <i className="fab fa-twitter"></i>
                    </li>{" "}
                    <li onClick={() => social_link(2)}>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li onClick={() => social_link(3)}>
                        <i className="fab fa-linkedin-in"></i>
                    </li>
                    <li onClick={() => social_link(4)}>
                        <i className="fab fa-github"></i>
                    </li>
                </ul>
            </div>
            <div className={Home.links}>
                <div className={Home.content}><Link to="/aboutme" style={{textDecoration: 'none', color:'inherit'}}>About Me</Link></div>
                <div className={Home.content}><Link to="/projects" style={{textDecoration: 'none', color:'inherit'}}>Projects</Link></div>
                <div className={Home.content}><Link to="/gallery" style={{textDecoration: 'none', color:'inherit'}}>Images</Link></div>
                <div className={Home.content}><Link to="/blogs" style={{textDecoration: 'none', color:'inherit'}}>Blog</Link></div>
                <div className={Home.content}><Link to="/contactme" style={{textDecoration: 'none', color:'inherit'}}>Contact Me</Link></div>
            </div>
       
        </div>
    );
};

export default HomePage;
