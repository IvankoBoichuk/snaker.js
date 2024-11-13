import "./style.css";
import Snaker from "../src/snaker";

document.addEventListener("DOMContentLoaded", () => {
  const snaker = new Snaker(".container", {
    rounded: 10,
    strokeStyle: "red",
    lineWidth: 2,
  });

  window.addEventListener("resize", () => {
    snaker.flow();
  });
});
