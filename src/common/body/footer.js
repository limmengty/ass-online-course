import { displayFooter } from "../index.js";

const footer_data = [
  {
    address: {
      location: "National Road 6A, Sangkat Prek Leap, Khan Chroy Changva, Phnom Penh ",
      iconFacebook: "../../images/facebook.png",
      iconTelegram: "../../images/telegram.png",
      links: {
        linkLocation: "#",
        linkFacebook: "#",
        linkTelegram: "#",
      }
    },
    link: "#",
    allCourse: {
      name: "All Course",
      links: {
        home: "../homepage/index.html",
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
    registrationLink: {
      name: "Information Links",
      fromRegistration: "Form of Registration",
      event: "News and events",
      ourFacilities: "Our Facilities",
      contactUs: "Contact Us",
      links: {
        home: "#",
        fromRegistration: "#",
        event: "../events/new_event.html",
        ourFacilities: "../ours/our_facilites.html",
        contactUs: "../contacts/contact_us.html",
      },
    },
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayFooter(footer_data);
});
