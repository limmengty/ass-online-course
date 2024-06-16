import { displayItems } from "../index.js";

const video_data = [
  {
    title: "Video&Graphic Academy",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: " 1 year (Weekend 8am -12pm and 2pm - 5pm)",
    link: "#"
  },
  {
    title: "Adobe illustrator Beginner & Intermediate",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: "Beginner, Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: " 35hrs (Weekend 8am - 12pm and 2pm - 5pm)",
    link: "#"
  },
  {
    title: "Adobe Photoshop Beginner & Advanced",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: " Beginner, Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: " 35hrs (Weekend 8am - 12pm and 2pm - 5pm)",
    link: "#"
  },
  {
    title: "Adobe After Effect Beginner & Intermediate & Advanced",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner, Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Mon-Fri 6pm - 8pm and 2pm - 5pm",
    link: "#"
  },
  {
    title: "Cinema 4D Beginner & Advanced",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: " Advanced",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (2pm - 5pm and Mon-Fri 6pm-8pm)",
    link: "#"
  },
  {
    title: "2D Cartoon Animation",
    department: " Video&Graphic Academy",
    campus: "AMTechnology Institute",
    level: " Advanced, Beginner",
    credit: "3.000",
    method: "Online",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "70hrs (Weekend 2pm - 5pm or 8am - 12pm and Mon-Fri 6pm - 8pm and 2pm - 5pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(video_data);;
});
