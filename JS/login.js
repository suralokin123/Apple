function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Функция входа в профиль
    console.log('Вход пользователя с email:', email);
    // Место для логики подтверждения ввода данных
}

function register() {
    // Логика для регистрации пользователя, возможно перенаправление на другую страницу
    console.log('Перенаправление на страницу регистрации');
}

function showNameField() {
    // Предположим, что данные успешно отправлены
  
    // Перенаправляем пользователя на страницу регистрации
    window.location.href = "./authentification.html";
  }
  
// Этот код добавляет обработчик события клика на кнопку "Регистрация", и при клике происходит переход на страницу "authentification.html"..
  document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'authentification.html';
});




function login() {
  // Здесь нужно добавить код, который проверяет введенные данные и отправляет запрос на сервер для проверки авторизации

  // Предположим, что авторизация прошла успешно
  // После успешной авторизации перенаправляем пользователя на main-two.html
  window.location.href = "main-two.html";
}

function register() {
  // Здесь нужно добавить код для перенаправления на страницу регистрации
  // Например:
  window.location.href = "register.html";
}
