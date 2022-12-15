import "../styles/style.css";
import { menu } from "./menu";
import { DOMselectors } from "./DOM";
console.log(menu);
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const buttons = {
  createcards: function () {
    menu.forEach((pie) => {
      DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}.png" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
      );
    });
  },
  filterStock: function () {
    menu
      .filter((pie) => pie.inStock == Yes)
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}.png" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterPrice: function () {
    menu
      .filter((pie) => pie.price < 10)
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}.png" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
};
console.log(buttons);
