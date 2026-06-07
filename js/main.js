import { Header } from "./module/header.js";
import { Footer } from "./module/footer.js";
Header();
Footer();

const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
