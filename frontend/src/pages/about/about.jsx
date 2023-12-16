import React from "react";
import About from "./about.module.css";

const AboutMe = () => {
    return(
        <div className={About.wrapper}>
            <div className={About.article}>
                <img src="#" alt="My Img"></img>
            <p>Hey All,<br></br>
            I Am Shubrhadeep Das, currently a Final Year undergraduate student from Indian Institute of Technology, Guwahati
            (IITG) majoring in Electronics and Communications Engineering with a 4-Year B.Tech Degree. I am a Software Developer.
            </p>
            <p>I am from Asansol in West Bengal, where I stayed for most of my life and did my schooling from. My programming journey started when I was in my 5th standard and learnt to code in Q-BASIC, a low level programming language.
                After that, I learnt Java as a part of  my school curriculum and went to the depths of Data Structures, Algorithms and OOPs. 
                During that time, I also learnt web technologies like HTML and CSS. After my 10th I started preparing for JEE(Joint Entrance Examination).While in college, 1st Year courses taught me C/C++ and I taught myself Python.

            </p>
            <p>
                During my curricculum, I worked on many projects focusing mainly on web development with ReactJS and DJango. I also have experience working on NodeJS. Apart from coding I also did projects on robotics and electronics as a part of lab courses.
            </p>
            <p>
                Here at IIT-G, I was first a part of Cepstrum (Student Body of Electrical and Electronics Dept.) which I joined as web-developer in my second year. In my third year, I was elected as Joint Cultural Secretary of my hostel which gave me the opportunity to organise various festive and cultural events and manage, participate and lead in various intra as well as inter hostel cultural events and competitions. 
            </p>
            <p>
                Apart from these, I enjoy music and playing guitar. I also love playing chess(I'm a beginner but love to solve puzzles on chess.com), cooking and playing video games in my free time.
            </p>
            </div>
        </div>
    )
};
export default AboutMe;