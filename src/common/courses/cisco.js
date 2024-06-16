import { displayItems } from "../index.js";

const cisco_data = [
  {
    title: "Cisco Academy",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "International Networking Engineer and Cyber Security (V7.0)",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: " Beginner, Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "1 year (Weekend 8am -12pm and 6pm - 8pm)",
    link: "#"
  },
  {
    title: "IT Essential V7.0",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: " 70hrs (Weekend 8am - 12pm)",
    link: "#"
  },
  {
    title: "CCNA1 V7.0 : Introduction to Networks (ITN)",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Mon-Fri 6pm - 8pm )",
    link: "#"
  },
  {
    title: "CCNA2 V7.0: Switching, Routing and Wireless Essentials (SRWE)",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Sat-Sun 8am-12pm)",
    link: "#"
  },
  {
    title: "CCNA 3 V7.0: Enterprise Networking, Security, and Automation (ENSA)",
    department: "Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm)",
    link: "#"
  },
  {
    title: "CCNA Cyber Security Essential",
    department: " Cisco Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "50hrs (Mon-Fri 6pm-8pm), 50hrs (Weekend 8am - 12pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(cisco_data);;
});
