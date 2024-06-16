import diplayItems from "../index.js";

const da_data = [
  {
    title: "AWS Cloud Foundations",
    department: "AWS Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Physical",
    start_Date: "2023/01/23",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
    diplayItems(da_data);;
});
