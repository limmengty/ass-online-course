import { displayItems } from "../index.js";

const da_data = [
  {
    title: "DATA SCIENCE FUNDAMENTALS",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Machine Learning",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "STATISTICS WITH PYTHON",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },  
  {
    title: "Artificial Intelligence (AI)",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Business Intellignce (PowerBI)",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend2pm-5pm",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Big Data",
    department: "Data Science Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "1 year (Mon-Fri 2pm-5pm or 6pm-8pm and Weekend 8am-12pm or 6pm-8pm), 45hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm), 45hrs (Weekend 2pm - 5pm and mon-fri 6pm-8pm))",
    link: "../errorPage/notfound.html"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(da_data);;
});
