// AirPods-catalog.js

function addToCart(item) {
    // Ваш текущий код добавления товара в корзину
  
    // Перенаправление на страницу Basket.html
    window.location.href = 'Basket.html';
  }
  
  function addToCart(item) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    window.location.href = 'Basket.html';
  }
  