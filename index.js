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

const card = document.querySelector('.catalog__card');
const catalog = document.querySelector('.catalog');

function createCard(product) {

    card.innerHTML =
    `
<div class="card__img-container">
  <div class="card__img">
  </div></div>
  <div class="card__selected"></div>
  <p class="card__description">${product.name}</p>
  <div class="card__text-container">
     <p class="card__price">${product.price} ${product.currency}</p>
     <div class="card__icon"></div>
  </div>
`


}


function renderCards(products) {

products.forEach(function(item) {
    
  createCard(item);

});

   

}

renderCards(items); 

// function forE(products) {

// products.forEach(function(item) {
//      console.log(item)
//  });

// }

// forE(items)