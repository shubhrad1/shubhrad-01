//import logo from "./logo.svg";
// import "./App.css";

import ParticlesConfig from "./pages/home/assets/ParticlesConfig";

import HomePage from "./pages/home/Home";
import ContactMe from "./pages/contact/ContactMe";
import BlogPost from "./pages/blog/blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "./lion96.png";
import { useEffect } from "react";


const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
function App() {
    useEffect(()=> {
        const favicon =document.getElementById('favicon');
        favicon.setAttribute('href',icon);
    },[]);
    
    return (
        <div style={styles.root}>
            <div className="App">
                <ParticlesConfig />
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutme" element={<ContactMe />} />
                        <Route path="/projects" element={<ContactMe />} />
                        <Route path="/gallery" element={<ContactMe />} />
                        <Route path="/blogs" element={<BlogPost />} />
                        <Route path="/contactme" element={<ContactMe />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
