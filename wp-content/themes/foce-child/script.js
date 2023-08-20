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
