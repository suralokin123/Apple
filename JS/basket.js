document.querySelector('.checkout-button').addEventListener('click', function() {
    // Получаем текущее количество товаров в корзине из локального хранилища
    let cartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;

    // Увеличиваем количество товаров на 1
    cartItemCount++;

    // Сохраняем обновленное количество товаров в локальное хранилище
    localStorage.setItem('cartItemCount', cartItemCount);

    // Обновляем отображаемое количество товаров в корзине в header
    document.getElementById('cartCount').textContent = cartItemCount;
});


// Получаем информацию о выбранных товарах из localStorage
let cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// Выводим информацию на странице
let cartList = document.getElementById('cart-items');
let basketEmptyText = document.getElementById('basket-empty-text');

// Функция для обновления отображения корзины
function updateCartDisplay() {
  if (cartItems.length > 0) {
    // Если есть выбранные товары, показываем их
    basketEmptyText.style.display = 'none';
    cartList.innerHTML = '';

    cartItems.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item;

      // Добавляем изображение товара
      let img = document.createElement('img');
      img.src = `/img/${item}.webp`;
      img.alt = item;
      img.classList.add('cart-item-img');
      li.appendChild(img);

      // Добавляем счетчик товаров
      let counter = document.createElement('div');
      counter.classList.add('item-counter');
      
      let increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.onclick = function() {
        increaseItem(item);
      };
      
      let decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.onclick = function() {
        decreaseItem(item);
      };
      
      counter.appendChild(decreaseButton);
      counter.appendChild(increaseButton);
      li.appendChild(counter);

      cartList.appendChild(li);
    });
  } else {
    // Если корзина пуста, показываем соответствующее сообщение
    basketEmptyText.style.display = 'block';
    cartList.innerHTML = '';
  }
}

// Функция увеличения количества товаров
function increaseItem(item) {
  // Получаем текущую корзину из localStorage
  let cartItems = JSON.parse(localStorage.getItem('cart'));

  // Ваш код увеличения количества товаров
  // ...

  // Обновляем отображение корзины
  updateCartDisplay();
}

// Функция уменьшения количества товаров
function decreaseItem(item) {
  // Получаем текущую корзину из localStorage
  let cartItems = JSON.parse(localStorage.getItem('cart'));

  // Ваш код уменьшения количества товаров
  // ...

  // Обновляем отображение корзины
  updateCartDisplay();
}

// Обновляем отображение корзины при загрузке страницы
updateCartDisplay();

 // Функция для очистки корзины
 function clearCart() {
    // Очищаем localStorage
    localStorage.removeItem('cart');
    // Очищаем отображение корзины
    cartItems = [];
    updateCartDisplay();
  }

  // ... (ваш предыдущий код здесь)

  // Обновляем отображение корзины при загрузке страницы
  updateCartDisplay();