const menu_obj = {
  top: "top-[60px]",
  opacity: "opacity-100",
  rotate: "rotate-180",
};

function Menu(e) {
  let list = document.querySelector("ul");
  let icon = document.querySelector(".icon");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add(menu_obj.top),
      list.classList.add(menu_obj.opacity),
      icon.classList.add(menu_obj.rotate))
    : ((e.name = "menu"),
      list.classList.remove(menu_obj.top),
      list.classList.remove(menu_obj.opacity),
      icon.classList.remove(menu_obj.rotate));
}

const handleClick = (e, index) => {
    // e.preventDefault();
    
    const links = document.querySelectorAll(".list");
    const item = document.querySelector(".item");
    const item_small = document.querySelector(".item-small");
  
    // Remove 'visible' class from all links
    links.forEach(link => link.classList.remove("visible"));
    
    // Add 'visible' class to the clicked link
    e.currentTarget.classList.add("visible");
  
    // Define styles for each index
    const styles = [
      { transform: 'translateX(0%)', width: '45px' },
      { transform: 'translateX(110%)', width: '80px' },
      { transform: 'translateX(146%)', width: '160px' },
      { transform: 'translateX(411%)', width: '95px' },
      { transform: 'translateX(712%)', width: '70px' },
      { transform: 'translateX(670%)', width: '90px' }
    ];
  
    const smallStyles = [
      { transform: 'translateY(0px)', left: '0px', width: '100%' },
      { transform: 'translateY(2000%)', left: '-21px', width: '116px' },
      { transform: 'translateY(4000%)', left: '-90px', width: '250px' },
      { transform: 'translateY(6000%)', left: '-33px', width: '140px' },
      { transform: 'translateY(8000%)', left: '-20px', width: '110px' },
      { transform: 'translateY(10000%)', left: '-30px', width: '135px' }
    ];
  
    // Apply styles to item and item_small based on index
    if (styles[index]) {
      item.style.transform = styles[index].transform;
      item.style.width = styles[index].width;
    } else {
      console.log("error");
    }
  
    if (smallStyles[index]) {
      item_small.style.transform = smallStyles[index].transform;
      item_small.style.left = smallStyles[index].left;
      item_small.style.width = smallStyles[index].width;
    } else {
      console.log("error");
    }
  };
  
  // Initialize the visibility of the first link (optional)
  // document.addEventListener("DOMContentLoaded", () => {
  //   document.querySelectorAll(".list")[0].classList.add("visible");
  // });
  