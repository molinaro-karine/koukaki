/****Tell the observer which elements to track****/
//const images = document.querySelectorAll("#cloud");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    const bigCloud = entry.target.querySelector(".bigCloud");
    const littleCloud = entry.target.querySelector(".littleCloud");

    if (entry.isIntersecting) {
      bigCloud.classList.add("moveCloud");
      littleCloud.classList.add("moveCloud");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    bigCloud.classList.remove("moveCloud");
    littleCloud.classList.remove("moveCloud");
  });
});

observer.observe(document.querySelector(".containerCloud"));

// Carrousel Characters

// import styles bundle

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  //centeredSlides: true,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  //loop: true,
  //loopedSlides: 2,
  loopAdditionalSlides: 1,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 70,
    stretch: 0,
    depth: 50,
    modifier: 1,
  },
});
