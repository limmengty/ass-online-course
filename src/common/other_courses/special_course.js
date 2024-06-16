import { displayItems } from "../index.js";

const special_course_data = [
  {
    title: "Mikrotik Level: MTCRE",
    department: "Mikrotik",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and Mon/Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "Mikrotik MTCNA",
    department: "Mikrotik",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and Mon/Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "Penetration Testing Level 1",
    department: "Mikrotik",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },
  {
    title: "Penetration Testing Level 2",
    department: "Mikrotik",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },
  {
    title: "ITIL 4 Foundation",
    department: "Mikrotik",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "30hrs (Weekend 2pm - 5pm or 8am - 12pm)",
    link: "#"
  },
  {
    title: "iOS Mobile Developer Specialized (Fundamental until Advanced)",
    department: "Mobile Developer Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "Android Mobile Developer ( Fundamental until Advanced )",
    department: "Mobile Developer Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(special_course_data);;
});
