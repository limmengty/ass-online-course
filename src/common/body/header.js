import { displayHeader } from "../index.js";

const header_data = [
  {
    logoImage: "Logo",
    home: {
      name: "Home",
      link: "../homepage/index.html",
    },
    allCourse: {
      name: "All Course",
      links: {
        home: "../courses/allcourse.html",
        ciscoAcademy: "../courses/cisco.html",
        awsAcademy: "../courses/aws.html",
        comptiaAcademy: "../courses/comp_tia.html",
        webAcademy: "../courses/web.html",
        dataScienceAcademy: "../courses/da.html",
        videoAcademy: "../courses/video_gra.html",
        devopAcademy: "../courses/devops.html",
        huaweiAcademy: "../courses/hauwei.html",
        systemAdminAcademy: "../courses/sa.html",
      },
      ciscoAcademy: "Cisco Academy",
      awsAcademy: "AWS Academy",
      comptiaAcademy: "CompTIA Academy",
      webAcademy: "Web Development Academy",
      dataScienceAcademy: "Data Science Academy",
      videoAcademy: "Video&Graphic Academy",
      devopAcademy: "DevOps Academy",
      huaweiAcademy: "Huawei Academy",
      systemAdminAcademy: "System Administrators Academy",
    },
    specialCourse: {
      name: "Other Special Course",
      cybersecurity: "Cybersecurity",
      mobileDev: "Mobile Developer",
      projectMan: "Project Management",
      webDev: "Web Development Academy",
      leadership: "Leadership",
      links: {
        home: "../other_courses/special_course.html",
        cybersecurity: "../other_courses/cybersecurity.html",
        mobileDev: "../other_courses/moblie_dev.html",
        projectMan: "#",
        webDev: "#",
        leadership: "#",
      },
    },
    registration: {
      name: "Registration",
      link: "../registration/registration.html",
    },
    aboutUs: {
      name: "About Us",
      ourFacilities: "Our Facilities",
      ourPartner: "Our Partner",
      contactUs: "Contact Us",
      links: {
        home: "#",
        ourFacilities: "../ours/our_facilites.html",
        ourPartner: "#",
        contactUs: "../contacts/contact_us.html"
      },
    },
    events: {
      name: "New Event",
      link: "../events/new_event.html"
    },
  },
];

window.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  displayHeader(header_data);
});
