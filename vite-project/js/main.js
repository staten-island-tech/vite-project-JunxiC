import "../styles/style.css";
import { menu } from "./menu";
import { DOMselectors } from "./DOM";
console.log(menu);
import AOS from "aos";
console.log(DOMselectors);
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
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
      );
    });
  },
  filterStocked: function () {
    menu
      .filter((pie) => pie.inStock == "Yes")
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterCheap: function () {
    menu
      .filter((pie) => pie.price < 10)
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterHighRated: function () {
    menu
      .filter((pie) => pie.customerStars > 4.5)
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterSpecialStock: function () {
    menu
      .filter((pie) => (pie.specialStock = "Yes"))
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterHotPie: function () {
    menu
      .filter((pie) => (pie.temperature = "Hot"))
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },
  filterColdPie: function () {
    menu
      .filter((pie) => (pie.temperature = "Cold"))
      .forEach((pie) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="inner">
          <p>${pie.itemName}</p>
          <img src="${pie.img}" alt="Pie"></img>
          <p>${pie.price}</p>
        </div>`
        );
      });
  },

  remove: function () {
    let card = document.querySelectorAll(".inner");
    card.forEach((card) => {
      card.remove();
    });
  },
};

console.log(buttons);

buttons.createcards();

DOMselectors.button2.addEventListener("click", function () {
  buttons.remove();
  buttons.filterStocked();
});

console.log(buttons);

DOMselectors.button3.addEventListener("click", function () {
  buttons.remove();
  buttons.filterCheap();
});

DOMselectors.button4.addEventListener("click", function () {
  buttons.remove();
  buttons.filterHighRated();
});

DOMselectors.button5.addEventListener("click", function () {
  buttons.remove();
  buttons.filterSpecialStock();
});

DOMselectors.button6.addEventListener("click", function () {
  buttons.remove();
  buttons.filterHotPie();
});

DOMselectors.button7.addEventListener("click", function () {
  buttons.remove();
  buttons.filterColdPie();
});
