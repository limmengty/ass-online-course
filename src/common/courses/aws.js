import { displayItems } from "../index.js";

const aws_data = [
  {
    title: "AWS Cloud Foundations",
    department: "AWS Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "AWS Cloud Security Foundations",
    department: "AWS Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "AWS Cloud Operation",
    department: "AWS Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "60hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "AWS Academy Cloud Architecting",
    department: "AWS Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm)",
    link: "../errorPage/notfound.html",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(aws_data);
});
