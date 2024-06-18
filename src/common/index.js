function displayItems(items) {
  let allData = items.map(function (item) {
    console.log(item);
    return `
            <div class="" >
                <div class="bg-blue-light p-5 flex justify-between flex-col items-start mt-0 rounded-md">
                    <div class="prose">
                            <h2>${item.title}</h2>
                            <p>
                                <strong>Department:</strong> 
                                ${item.department}
                            </p>
                            <p>
                                <strong>Campus:</strong> 
                                ${item.campus}
                            </p>
                            <p>
                                <strong>Level:</strong> 
                                ${item.level}
                            </p>
                            <p>
                                <strong>Credit:</strong> 
                                ${item.credit}
                            </p>
                            <p>
                                <strong>Method:</strong> 
                                ${item.method}
                            </p>
                            <p>
                                <strong>Start Date:</strong> 
                                ${item.start_Date}
                            </p>
                            <p>
                                <strong>Duration:</strong> 
                                ${item.duration}
                            </p>
                    </div>
  
                  <button class="md:mt-10 mt-5">
                      <a href="${item.link}"
                          class="z-50 hover:bg-transparent bg-blue-dark transition-all ease-in-out duration-200 inline-block rounded border border-blue-dark md:px-12 md:py-3 px-6 py-2 md:text-base text-white hover:text-blue-dark focus:outline-none focus:ring active:text-white">
                          More Details
                      </a>
                  </button>
              </div>
            </div>
              `;
  });
  allData = allData.join("");
  document.querySelector(".item").innerHTML = allData;
}

function displayEvent(events) {
  let allData = events.map(function (event) {
    return `<div class="group rounded-lg bg-gray-200 border-blue-dark border-2 md:border-4 pb-2 overflow-hidden ">
                <img alt="" 
                src="
                    ../images/${event.image}
                " 
                class="h-52 transition duration-500 group-hover:scale-105  w-full object-cover sm:h-40 lg:h-60" />
                <div class="p-5">
                    <div class="prose">
                        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                            ${event.title}
                        </h3>
                        <p class="mt-2 max-w-sm text-gray-700">
                            ${event.description}
                        </p>
                    </div>
    
                    <button class="md:mt-10 mt-5">
                        <a href="${event.link}"
                            class="z-50 hover:bg-blue-dark bg-transparent transition-all ease-in-out duration-200 inline-block rounded border border-blue-dark md:px-8 md:py-2 px-6 py-2 md:text-base text-blue-dark hover:text-white focus:outline-none focus:ring active:text-blue-dark">
                            Read More
                        </a>
                    </button>
                </div>
            </div>
              `;
  });
  allData = allData.join("");
  document.querySelector(".events").innerHTML = allData;
}
function displayPopUp(popups) {
  let allData = popups.map(function (popup) {
    return `    
            <div
                onclick="pushToUp()"
                class="popup w-8 h-8  rounded-full fixed cursor-pointer bottom-10 right-3 animate-bounce opacity-0">
                <i class="inline-block fa-solid w-8 h-8 p-2 fa-arrow-up text-md text-center rounded-full font-bold text-white bg-blue-500 "></i>
            </div>
    `;
  });
//   allData = allData.join("");
  document.querySelector(".popups").innerHTML = allData;
}

function displayHeader(headers) {
  let allData = headers.map(function (header) {
    return `
                <div class="mx-auto max-w-screen-full container px-2 sm:px-2 lg:px-2 ">
                <div class="flex w-full h-16 items-center flex-row justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <a class="block text-white font-bold" 
                        href="${header.home.link}">
                            <span class="sr-only">Home</span>
                            ${header.logoImage}
                        </a>
                    </div>
                    <div class="flex flex-row justify-between items-center">
                        <ul
                            class="lg:opacity-100 opacity-0 flex lg:items-center lg:flex-row flex-col justify-center items-center gap-12 lg:gap-6 xl:gap-6 text-xl lg:text-sm xl:text-base text-white px-10  bg-blue-dark absolute lg:static lg:h-auto w-full h-screen left-0 top-[-400px] transition-all ease-in duration-1000 ">
                            <!-- home -->
                            <li class="group relative" onmouseover="handleClick(event, 0)">
                                <div class="lg:relative">
                                    <div class="flex flex-col lg:flex-row items-center justify-center">
                                        <!-- hover big screen -->
                                        <div
                                            class="hidden lg:block item transition-all duration-1000 absolute w-full h-1 rounded-sm bg-blue-light top-10">
                                        </div>
                                        <!-- hover big small -->
                                        <div
                                            class="lg:hidden item-small transition-all duration-1000 inline-block absolute w-full h-1 rounded-sm bg-blue-light top-10">
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50text-gray-500 transition hover:text-blue-light "
                                            href="${header.home.link}">
                                            ${header.home.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <!-- all course -->
                            <li class="group allCourse" onmouseover="handleClick(event, 1)">
                                <div
                                    class="list lg:relative ">
                                    <div class=" inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50 text-gray-500 transition hover:text-blue-light"
                                            href="${header.allCourse.links.home}"
                                            > 
                                            ${header.allCourse.name}
                                        </a>
                                    </div>
                                    <div class="lg:group-hover:visible group-hover:top-7 top-[50px]  invisible md:block md:absolute fixed md:text-sm md:w-64 w-full bg-blue-light md:bg-blue-dark shadow-lg transition-all ease-in duration-200  "
                                        role="menu">
                                        <div class="pt-5">
                                            <a 
                                            href="${header.allCourse.links.ciscoAcademy}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.ciscoAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.awsAcademy}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.awsAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.comptiaAcademy}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.comptiaAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.webAcademy}" 

                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.webAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.dataScienceAcademy}" 

                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.dataScienceAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.videoAcademy}" 

                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.videoAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.devopAcademy}" 

                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.devopAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.huaweiAcademy}" 

                                            class="dropdown-hover" role="menuitem">
                                                    ${header.allCourse.huaweiAcademy}
                                            </a>
                                            <a 
                                            href="${header.allCourse.links.systemAdminAcademy}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.allCourse.systemAdminAcademy}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- Other Special Course -->
                            <li class="group specialCourse" onmouseover="handleClick(event, 2)">
                                <div
                                    class="list lg:relative ">
                                    <div class=" inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50text-gray-500 transition hover:text-blue-light "
                                            href="${header.specialCourse.links.home}" 
                                            > 
                                            ${header.specialCourse.name}
                                        </a>
                                    </div>
                                    <div class="lg:group-hover:visible group-hover:top-7 top-[50px]  invisible md:block md:absolute fixed md:text-sm md:w-64 w-full bg-blue-light md:bg-blue-dark shadow-lg transition-all ease-in duration-100 "
                                        role="menu">
                                        <div class="pt-5">
                                            <a 
                                            href="${header.specialCourse.links.cybersecurity}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.specialCourse.cybersecurity}

                                            </a>
                                            <a 
                                            href="${header.specialCourse.links.mobileDev}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.specialCourse.mobileDev}

                                            </a>
                                            <a 
                                            href="${header.specialCourse.links.projectMan}"  
                                            class="dropdown-hover" role="menuitem">
                                                ${header.specialCourse.projectMan}
                                            </a>
                                            <a 
                                            href="${header.specialCourse.links.leadership}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.specialCourse.leadership}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- Registration -->
                            <li class="group specialCourse"  onmouseover="handleClick(event, 3)">
                                <div class="lg:relative">
                                    <div class=" inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50text-gray-500 transition hover:text-blue-light "
                                            href="${header.registration.link}" 
                                            > 
                                            ${header.registration.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <!-- About Us -->
                            <li class="group specialCourse"  onmouseover="handleClick(event, 4)">
                                <div
                                    class="lg:relative ">
                                    <div class="inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50text-gray-500 transition hover:text-blue-light "
                                            href="${header.aboutUs.links.home}" 
                                            > 
                                            ${header.aboutUs.name}
                                        </a>
                                    </div>
                                    <div class="lg:group-hover:visible group-hover:top-7 top-[50px]  invisible md:block md:absolute fixed md:text-sm md:w-64 w-full bg-blue-light md:bg-blue-dark shadow-lg transition-all ease-in duration-100 "
                                        role="menu">
                                        <div class="pt-5">
                                            <a 
                                            href="${header.aboutUs.links.ourFacilities}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.aboutUs.ourFacilities}
                                            </a>
                                            <a 
                                            href="${header.aboutUs.links.contactUs}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.aboutUs.contactUs}
                                            </a>
                                            <a 
                                            href="${header.aboutUs.links.ourPartner}" 
                                            class="dropdown-hover" role="menuitem">
                                                ${header.aboutUs.ourPartner}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- News Event -->
                            <li class="group specialCourse" onmouseover="handleClick(event, 5)">
                                <div
                                    class="list ">
                                    <div class=" inline-flex items-center overflow-hidden rounded-md ">
                                        <a class="group-hover:bg-gray-500 group-hover:text-gray-50text-gray-500 transition hover:text-blue-light "
                                            href="${header.events.link}" 
                                            > 
                                            ${header.events.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>


                    </div>
                    <!-- menu action -->
                    <div class="flex items-center gap-3 mt-2 flex-row justify-center text-base font-poppins">
                        <div class="block menu_bar text-base font-poppins mt-2">
                            <button class="rounded bg-gray-100 text-gray-600 transition hover:text-gray-600/75">
                                <ion-icon name="search" onclick="Search()"
                                    class="text-xl text-white cursor-pointer icon transition-all duration-150 ease-linear "></ion-icon>
                            </button>
                        </div>
                        <div class="block lg:hidden menu_bar text-base font-poppins">
                            <button class="rounded bg-gray-100 text-gray-600 transition hover:text-gray-600/75">
                                <ion-icon name="menu" onclick="Menu(this)"
                                    class="text-xl text-white cursor-pointer icon transition-all duration-150 ease-linear "></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  allData = allData.join("");
  document.querySelector(".headers").innerHTML = allData;
}

function displayFooter(footers) {
  let allData = footers.map(function (footer) {
    const date = new Date().getFullYear();
    return `
            <div class="w-full h-full top-0">
                <div class="relative w-full h-52 md:h-72 bg-blue-400">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.488327362724!2d104.92760177553728!3d11.588492543689394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6ZIOGek-GfkOGemuGej-Geu-Gekw!5e0!3m2!1skm!2skh!4v1717928601020!5m2!1skm!2skh"
                        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
                <div class="bg-blue-dark text-white">
                    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                        <div class="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                            <div>
                                <p class="text-xl font-bold">Address</p>

                                <ul class="mt-6 space-y-4 text-base">
                                    <li class="relative w-full">
                                        <a 
                                        href="${footer.address.links.linkLocation}"
                                            class="hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0">
                                            ${footer.address.location}
                                        </a>
                                    </li>

                                    <li>
                                        <a 
                                        href="${footer.address.links.linkFacebook}"
                                        class=" transition hover:opacity-75">
                                            <img src="${footer.address.iconFacebook}" class="w-10" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                        href="${footer.address.links.linkTelegram}"
                                        class=" transition hover:opacity-75">
                                            <img src="${footer.address.iconTelegram}" class="w-10" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p class="text-xl font-bold">All Course</p>

                                <ul class="mt-6 space-y-4 text-base">
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.ciscoAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.ciscoAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.awsAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.awsAcademy}
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.comptiaAcademy}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.comptiaAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.webAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-7">
                                                ${footer.allCourse.webAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.dataScienceAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.dataScienceAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.videoAcademy}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.videoAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.devopAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.devopAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.huaweiAcademy}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.huaweiAcademy}
                                            </span>
                                        </a>
                                    </li>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.systemAdminAcademy}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.allCourse.systemAdminAcademy}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p class="text-xl font-bold">
                                ${footer.specialCourse.name}
                                </p>
                                <ul class="mt-6 space-y-4 text-base">
                                    <li class="">
                                        <a 
                                        href="${footer.specialCourse.links.mobileDev}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.specialCourse.mobileDev}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.specialCourse.links.cybersecurity}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.specialCourse.cybersecurity}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.projectMan}"   
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.specialCourse.projectMan}
                                            </span>
                                        </a>
                                    </li>                                    
                                    <li class="">
                                        <a 
                                        href="${footer.allCourse.links.webDev}"   
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.specialCourse.webDev}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.specialCourse.links.leadership}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.specialCourse.leadership}
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <p class="text-xl font-bold">
                                    ${footer.registrationLink.name}
                                </p>

                                <ul class="mt-6 space-y-4 text-base">
                                    <li class="">
                                        <a 
                                        href="${footer.registrationLink.links.home}" 
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.registrationLink.fromRegistration}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.registrationLink.links.event}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.registrationLink.event}

                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.registrationLink.links.ourFacilities}"  
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.registrationLink.ourFacilities}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a 
                                        href="${footer.registrationLink.links.contactUs}"   
                                        class="relative w-full">
                                            <span
                                                class=" hover:after:duration-500 hover:after:visible hover:after:w-[100%] after:inline-block after:invisible after:w-[0%] after:bg-blue-light after:h-[2px] after:rounded-sm after:absolute after:contents-[] after:bottom-0 after:left-0 after:top-8">
                                                ${footer.registrationLink.contactUs}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="bg-white h-10 text-center flex items-center justify-center py-8 md:py-10">
                    <p class="text-blue-dark font-bold text-xs md:text-base">© Copyright ${date} ${footer.copyright}
                    </p>
                </div>
            </div>
        `;
  });
  allData = allData.join("");
  document.querySelector(".footers").innerHTML = allData;
}

function displayCourse(courses) {
    let allData = courses.map(function (course) {
      return `<div class="group cursor-pointer rounded-lg bg-gray-200 border-blue-light border-2 md:border-4 pb-2 overflow-hidden">
                  <img alt="" 
                  src="../images/${course.image} " 
                  class="h-52 transition  duration-500 group-hover:scale-105  w-full object-cover sm:h-40 lg:h-60" />
                  <div class="p-5">
                      <div class="prose prose-h1:text-xs prose-h3:text-black">
                          <h3 class="">
                              ${course.department}
                          </h3>
                      </div>
      
                      <button class="md:mt-5 mt-2">
                          <a href="${course.link}"
                              class="z-50 hover:bg-blue-light bg-transparent transition-all ease-in-out duration-200 inline-block rounded border border-blue-light md:px-8 md:py-2 px-6 py-2 md:text-base text-blue-dark hover:text-white focus:outline-none focus:ring active:text-blue-dark">
                              Read More
                          </a>
                      </button>
                  </div>
              </div>
                `;
    });
    allData = allData.join("");
    document.querySelector(".events").innerHTML = allData;
  }

  export { displayItems, displayEvent, displayHeader, displayFooter, displayPopUp, displayCourse };
