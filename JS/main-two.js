// Проверяем, авторизован ли пользователь
if (localStorage.getItem('loggedIn') !== 'true') {
    // Если не авторизован, перенаправляем его на страницу аутентификации
    window.location.href = "/authentification.html";
} else {
    // Если авторизован, отображаем страницу профиля
    var userEmail = localStorage.getItem('email');
    // Ваш код для отображения профиля пользователя с использованием userEmail
}

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
