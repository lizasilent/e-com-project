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
];

const catalog = document.querySelector(".catalog");
const card = document.querySelector(".catalog__card");



function createCard(product) {

const newcard = card.cloneNode(true);

const cardDescription = newcard.querySelector(".card__description");
const cardPrice = newcard.querySelector(".card__price");

cardDescription.textContent = product.name;
cardPrice.textContent = product.price;
   
return newcard;
}

console.log()


function renderCard(data) {
catalog.prepend(createCard(data))
}

items.forEach(function(data) {
  renderCard(data);
  console.log(renderCard(data))
});