import { displayItems } from "../index.js";

const devops_data = [
  {
    title: "DevOps I",
    department: " DevOps Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration: "45hrs (Mon/Fri 6pm - 8pm)",
    link: "#"
  },  
  {
    title: "DevOps II",
    department: " DevOps Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and mon-fri 6pm-8pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(devops_data);;
});
