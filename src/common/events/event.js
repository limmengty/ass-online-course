import { displayEvent } from "../index.js";

const event_data = [
  {
    image: "../../images/about.jpg",
    description: "AWS Academy",
    title: "AWS Cloud Foundations",
    link: "#",
  },
];

window.addEventListener("DOMContentLoaded", function () {
    displayEvent(event_data);
});
