import { displayEvent } from "../index.js";

const event_data = [
  {
    image: "../../images/events/n1.jpg",
    title: "AMTechnology Students Achieve Excellence in Digital Innovation",
    description: "Explore the success of AMTechnology students in virtual competitions, from coding challenges to digital art showcases, highlighting their adaptability and proficiency in the digital realm.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n2.jpg",
    title: "AMTechnology Students Shine in Virtual Competitions",
    description: "Celebrate the achievements of AMTechnology students in digital innovation, where they have excelled in coding, app development, and other digital projects, showcasing their creativity and technical skills.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n3.jpg",
    title: "AMTechnology Recognizes Student Achievements in Virtual Learning",
    description: "Celebrate the success of AMTechnology students in virtual STEM challenges, where they have showcased their problem-solving skills and scientific knowledge through innovative digital projects.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n4.jpg",
    title: "AMTechnology Students Earn Accolades in Virtual STEM Challenges",
    description: "Discover the achievements of AMTechnology students in virtual learning environments, where they have demonstrated outstanding academic performance and engagement in online education.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n5.jpg",
    title: "AMTechnology Digital Artists Shine in Online Art Exhibitions",
    description: "Explore the creativity of AMTechnology students as they excel in online art exhibitions, displaying their talents in digital art, animation, and graphic design.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n6.jpg",
    title: "AMTechnology Hackathon Success: Students Innovate for a Digital Future",
    description: "Dive into the achievements of AMTechnology students in hackathons, where they have developed cutting-edge solutions and prototypes that address real-world digital challenges and opportunities.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n7.jpg",
    title: "AMTechnology Students Win National Recognition for Virtual Debate Excellence",
    description: "Celebrate the achievement of AMTechnology students as they receive national recognition for their exceptional performance in virtual debate competitions, demonstrating eloquence and critical thinking in a digital format.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n8.jpg",
    title: "AMTechnology Coding Club Triumphs in Regional Programming Contests",
    description: "Explore the success of AMTechnology's coding club as they dominate regional programming contests, showcasing their mastery of algorithms, coding languages, and teamwork in digital challenges.",
    link: "../errorPage/notfound.html",
  },  
  {
    image: "../../images/events/n9.jpg",
    title: "AMTechnology Digital Citizenship Initiative Honored for Promoting Online Safety",
    description: "Discover how AMTechnology students are recognized for their efforts in promoting digital citizenship and online safety, fostering a positive digital environment within the school and community.",
    link: "../errorPage/notfound.html",
  },
];

window.addEventListener("DOMContentLoaded", function () {
    displayEvent(event_data);

});