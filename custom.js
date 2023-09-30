let yukari = document.getElementsByClassName("yukari_cik")[0];
// console.log(yukari);

window.addEventListener("scroll", function () {
  const mesafe = window.scrollY; // Yukarıdan olan uzaklığı verir
  //   console.log(mesafe);
  if (mesafe > 300) {
    yukari.classList.add("goster");
  } else {
    yukari.classList.remove("goster");
  }
});

yukari.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

yukari.addEventListener("mousemove", () => {
  yukari.innerHTML = "&uarr;";
});
yukari.addEventListener("mouseout", () => {
  yukari.innerHTML = "TOP";
});
