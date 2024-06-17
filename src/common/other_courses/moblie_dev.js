import { displayItems } from "../index.js";

const mobile_dev_data = [
  {
    title: "iOS Mobile Developer Specialized (Fundamental until Advanced)",
    department: "Mobile Developer Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "Android Mobile Developer ( Fundamental until Advanced )",
    department: "Mobile Developer Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "../errorPage/notfound.html"
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(mobile_dev_data);;
});
