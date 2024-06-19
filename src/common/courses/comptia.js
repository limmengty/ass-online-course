import { displayItems } from "../index.js";

const comptia_data = [
  {
    title: "CompTIA Fundamental",
    department: "CompTIA Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration:
      " 70hrs (2pm - 5pm and Mon-Fri 6pm-8pm), 70hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "CompTIA Core",
    department: "CompTIA Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration:
      "70hrs (Mon-Fri 2pm-5pm or 6pm-8pm), 70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 2pm - 5pm or 6pm - 8pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "CompTIA NETWORK+",
    department: "CompTIA Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration: " 70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html",
  },
  {
    title: "CompTIA SECURITY+",
    department: "CompTIA Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration:
      "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 2pm - 5pm or 6pm - 8pm)",
    link: "../errorPage/notfound.html",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(comptia_data);
});
