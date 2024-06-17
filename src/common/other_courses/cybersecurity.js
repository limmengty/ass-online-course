import { displayItems } from "../index.js";

const cybersecurity_data = [
  {
    title: "The Certified Ethical Hacker",
    department: "EC-Council",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "../errorPage/notfound.html"
  },
  {
    title: "THE CERTIFIED NETWORK DEFENDER V2",
    department: "EC-Council",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "../errorPage/notfound.html"
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(cybersecurity_data);;
});
