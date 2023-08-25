/****Tell the observer which elements to track****/
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

// parallax vidéo avec simpleParallaxJS

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video");

  new simpleParallax(video, {
    orientation: "right",
    scale: 1.12,
    delay: 0.5,
    transition: "ease-in-out",
  });
});

// Carrousel Characters
const swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 1,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  },
});

// Menu Burger

document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".burgerBtn");
  const fullscreenMenu = document.querySelector(".fullscreenMenu");

  // Added click event listener to menu button
  menuBurger.addEventListener("click", function () {
    // Added 'active' class to animate menu button
    menuBurger.classList.toggle("active");

    // Added 'open' class to show or hide fullscreen menu
    fullscreenMenu.classList.toggle("open");
  });
});

// menu link

document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".burgerBtn");
  const fullscreenMenu = document.querySelector(".fullscreenMenu");

  menuBurger.addEventListener("click", function () {
    // Selection of fullscreen menu items and all menu links
    const menuLinks = fullscreenMenu.querySelectorAll("ul li a");

    // Added 'titleAnimation' class to each menu link
    menuLinks.forEach((link) => {
      link.classList.add("titleAnimation");
    });

    // Triggering the animation with a delay
    setTimeout(() => {
      menuLinks.forEach((link, index) => {
        const delay = index === 0 ? 400 : index * 600;

        // Added 'visibility' class with specified delay
        setTimeout(() => {
          link.classList.add("visibility");
        }, delay);
      });
    }, 150);
  });
});
