import "../styles/style.css";
import { menu } from "./menu";
import { DOMselectors } from "./DOM";
console.log(menu);
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const buttons = {
  cards: function () {
    menu.forEach((menu) => {
      DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="inner">
          <p>${menu.itemName}</p>
          <img src="${menu.img}.png" alt="Pie"></img>
          <p>${menu.price}</p>
        </div>`
      );
    });
  },
  filterStock: function () {
    menu
      .filter((menu) => menu.inStock == Yes)
      .forEach((menu) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${menu.itemName}</p>
          <img src="${menu.img}.png" alt="Pie"></img>
          <p>${menu.price}</p>
        </div>`
        );
      });
  },
  filterPrice: function () {
    menu
      .filter((menu) => menu.price < 10)
      .forEach((menu) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${menu.itemName}</p>
          <img src="${menu.img}.png" alt="Pie"></img>
          <p>${menu.price}</p>
        </div>`
        );
      });
  },
};
console.log(buttons);
