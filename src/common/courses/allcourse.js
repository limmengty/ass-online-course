import { displayCourse } from "../index.js";

const allcourse_data = [
  {
    image: "../../images/aws.jpg",
    department: "AWS Academy",
    link: "../courses/aws.html",
  },
  {
    image: "../../images/cisco.jpg",
    department: "Cisco Academy",
    link: "../courses/cisco.html",
  },
  {
    image: "../../images/CompTIA.jpg",
    department: "CompTIA Academy",
    link: "./courses/comp_tia.html",
  },
  {
    image: "../../images/web.jpg",
    department: "Web Development Academy",
    link: "../courses/web.html",
  },
  {
    image: "../../images/aws.jpg",
    department: "Data Science Academy",
    link: "../courses/web.html",
  },
  {
    image: "../../images/video graphic.jpg",
    department: "Video&Graphic Academy",
    link: "../courses/video_gra.html",
  },
  {
    image: "../../images/DevOps.jpg",
    department: "DevOps Academy",
    link: "../courses/devops.html",
  },
  {
    image: "../../images/Huawei.jpg",
    department: "Huawei Academy",
    link: "../courses/hauwei.html",
  },
  {
    image: "../../images/SA.jpg",
    department: "System Administrators Academy",
    link: "../courses/sa.html",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayCourse(allcourse_data);
});
