import { displayItems } from "../index.js";

const web_data = [
  {
    title: "Java Enterprise Spring Framework",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "60hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "International Web Developer",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",  
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "1 year (Mon-Fri 6pm - 8pm and Sat-Sun 8am - 12pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Front End",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Back End I",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Back End II",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23",
    duration: "70hrs (Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Back End + Front End",
    department: "Web Development Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23",
    duration: "70hrs (Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },

];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(web_data);;
});
