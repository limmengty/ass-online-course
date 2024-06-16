import { displayItems } from "../index.js";

const sa_data = [
  {
    title: "Project Management",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "20hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },
  {
    title: "Identify with Windows Server 2016 (MS 20742B) Level 1",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm)",
    link: "#"
  },
  {
    title: "Networking with Windows Server 2016 (MS 20741B) Level 2",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm)",
    link: "#"
  },
  {
    title: "Installation, Storage, and the Computer with Window Server 2016 (MS 20740C) Level 3",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and Mon/Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "RedHat Linux L1",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon/Fri 6pm - 8pm​​​​​)",
    link: "#"
  },  
  {
    title: "RedHat Linux L2",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon/Fri 6pm - 8pm​​​​​)",
    link: "#"
  },
  {
    title: "Oracle Database 19c: SQL Fundamental",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "50hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },
  {
    title: "Oracle Database 19c_Administration Workshop I",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "50hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },
  {
    title: "Oracle Database 19c – Administration Workshop II",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Advanced",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "50hrs (Mon-Fri 6pm-8pm and Weekend 8am-12pm or 2pm-5pm)",
    link: "#"
  },  
  {
    title: "VMware vSphere: Install, Configure, Manage",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Advanced, Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "42hrs ( Weekend 2pm-5pm)",
    link: "#"
  },
  {
    title: "Microsoft Azure fundamental AZ-900T00-A (Level 1)",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Beginner",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "24hrs (Mon-Fri 6pm-8pm and Weekend 2pm-5pm",
    link: "#"
  },  
  {
    title: "Developing Solution of Microsoft Azure AZ-204T00-A (Level 2)",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Mon-Fri 6pm-8pm and Weekend2pm-5pm)",
    link: "#"
  },
  {
    title: "Microsoft Identify and Access Administrator, SC-300T00 (Level 3)",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and Mon/Fri 6pm - 8pm)",
    link: "#"
  },
  {
    title: "Office 365",
    department: "System Administrators Academy",
    campus: "AMTechnology Institute",
    level: "Intermediate",
    credit: "3.000",
    method: "Online, Physical",
    start_Date: "2023/01/23, 2023/01/28",
    duration: "45hrs (Weekend 2pm - 5pm and Mon-Fri 6pm - 8pm)",
    link: "#"
  },


];

window.addEventListener("DOMContentLoaded", function () {
  displayItems(sa_data);;
});
