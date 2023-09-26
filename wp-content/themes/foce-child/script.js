// Function for triggering the fade-in animation with the entry parameter
function fadeInAnimation(entry) {
  // Adding the 'fadeIn' class to the "entry" element to trigger the fade-in animation created in css
  entry.target.classList.add("fadeIn");

  // Animation appearance of titles
  const title = entry.target.querySelector("h2, h3");

  // Checking if the title exists and if it has content
  if (title && title.textContent) {
    // Division of title content into words
    const words = title.textContent.split(" ");

    // Clear title content
    title.textContent = "";

    // Creation of 'span' elements for each word of the title and addition of the 'titleAnimation' class
    words.forEach((word) => {
      const span = document.createElement("span");
      span.classList.add("titleAnimation");
      span.textContent = word;
      title.appendChild(span);
    });

    // Select all 'span' elements with 'titleAnimation' class inside the title
    const spans = title.querySelectorAll(".titleAnimation");

    // Progressively adding the 'visibility' class to each 'span' element with a delay
    spans.forEach((span, index) => {
      const delay = index === 0 ? 400 : index * 600;

      // Added 'visibility' class with specified delay
      setTimeout(() => {
        span.classList.add("visibility");
      }, delay);
    });
  }
}

// Creation of the intersection observer
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeInAnimation(entry);
      observer.unobserve(entry.target);
    }
  });
});

// Selection of sections to animate
const sections = document.querySelectorAll(
  ".story, #characters, #place, #studio,.eventOscars,.titreOscar, .site-footer"
);

// Add intersection observer to each section
sections.forEach((section) => {
  sectionObserver.observe(section);
});

//cloud animation
const elementsToMove = document.querySelectorAll(".cloud");

let moveObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `moveCloud 5s ease-in`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

elementsToMove.forEach((element) => {
  moveObserver.observe(element);
});

//Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  loopAdditionalSlides: 4,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
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
