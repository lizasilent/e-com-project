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

const gridElement = catalog.cloneNode(true);
const cardDescription = gridElement.querySelector(".card__description");
const cardPrice = gridElement.querySelector(".card__price");

cardDescription.textContent = product.name;
cardPrice.textContent = product.price;
   
return gridElement;
}


function renderCard(data) {
  console.log(data)
catalog.prepend(createCard(data))
}

items.forEach(function(data) {
  renderCard(data);
});