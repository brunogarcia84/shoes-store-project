const banner = document.querySelector(".note");
const sticky = banner.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    banner.style.position = "fixed";
    banner.style.top = "0px";
  } else {
    banner.style.position = "relative";
    banner.style.top = "initial";
  }
};
