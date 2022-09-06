let items = [
  {
    name: "Крем для лица",
    price: 199,
    currency: "₽",
    photo: "../images/large_укреп_маск.png",
  },

  {
    name: "Крем для носа",
    price: 198,
    currency: "₽",
    photo: "../images/large_укреп_маск.png",
  },

  {
    name: "Маска ночная для лица",
    price: 205,
    currency: "₽",
    photo: "../images/large_укреп_маск.png",
  },

  {
    name: "Маска ночная для всего",
    price: 205,
    currency: "₽",
    photo: "../images/large_укреп_маск.png",
  }

];

const catalog = document.querySelector(".catalog");
const card = catalog.querySelector(".catalog__card");

function createCard(product) {

  const newСard = card.cloneNode(true);
  
  const cardDescription = newСard.querySelector(".card__description");
  const cardPrice = newСard.querySelector(".card__price");

  cardDescription.textContent = product.name;
  cardPrice.textContent = product.price;

  return newСard;
}

function renderCard(data) {

  catalog.prepend(createCard(data));
}

items.forEach(function (data) {
  renderCard(data);
});


