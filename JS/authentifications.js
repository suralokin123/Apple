function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  
  
  function showNameField() {
    let form = document.getElementById('registrationForm');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'username');
    nameInput.setAttribute('name', 'username');
    nameInput.setAttribute('placeholder', 'Имя');
  
    let emailInput = document.getElementById('email');
    form.insertBefore(nameInput, emailInput);
  }
  
  let nameInputAdded = false;

  function showNameField() {
    if (!nameInputAdded) {
      let form = document.getElementById('registrationForm');
      let nameInput = document.createElement('input');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('id', 'username');
      nameInput.setAttribute('name', 'username');
      nameInput.setAttribute('placeholder', 'Имя');
    
      let submitButton = form.getElementsByTagName('button')[0];
      form.insertBefore(nameInput, submitButton);
      submitButton.setAttribute('onclick', 'validateAndSendFormData()');
      nameInputAdded = true;
    }
  }
  
  function validateAndSendFormData() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    if (!username || !email || !password) {
      alert("Пожалуйста, заполните все поля формы.");
    } else {
      // Тут можно добавить отправку данных на сервер и обработку отправки письма
      alert("Данные успешно отправлены!");
    }
  }
  

  let formState = 'registration';

  function toggleForm() {
    if (formState === 'registration') {
      let formContainer = document.getElementById('authContainer');
      let formTitle = document.getElementById('formTitle');
      let registrationForm = document.getElementById('registrationForm');
  
      formTitle.innerText = 'Авторизация';
  
      let usernameInput = document.getElementById('username');
      if (usernameInput) {
        registrationForm.removeChild(usernameInput);
      }
  
      let submitButton = registrationForm.getElementsByTagName('button')[0];
      submitButton.innerText = 'Авторизация';
      submitButton.setAttribute('onclick', 'submitAuthForm()');
  
      formState = 'auth';
    } else {
      // Логика для возврата к форме регистрации
      formState = 'registration';
    }
  }
  
  function submitAuthForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    // Логика для отправки данных формы авторизации на сервер
  }
  

  document.getElementById('loginBtn').addEventListener('click', function() {
    // Получаем значения полей электронной почты и пароля
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Делаем запрос к серверу для создания профиля пользователя
    // ...
    // Предположим, что получили ответ с ID пользователя
    var userId = "12345"; // Здесь ваш ID пользователя
    
    // Перенаправляем пользователя на страницу его профиля с использованием полученного ID
    window.location.href = "/profile.html?id=" + userId;
});
  

document.getElementById('authForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Проверяем верность учетных данных (предположим, у нас есть функция для этого checkCredentials)
  if (checkCredentials(email, password)) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('email', email);
      // Перенаправляем пользователя на страницу профиля
      window.location.href = "/main-two.html";
  } else {
      alert('Неверные учетные данные');
  }
});

function checkCredentials(email, password) {
  // Здесь производится проверка учетных данных, например, отправка запроса на сервер
  // и проверка ответа или другие методы проверки
  // Вернуть true, если учетные данные верны, иначе false
}

function login() {
  // Здесь нужно добавить код, который проверяет введенные данные и отправляет запрос на сервер для проверки авторизации

  // После успешной авторизации перенаправляем пользователя на main-two.html
  window.location.href = "main-two.html";
}
