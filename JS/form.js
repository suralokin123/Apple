function sendFormData(event) {
    event.preventDefault(); // предотвращаем отправку формы по умолчанию
  
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    // Отправка данных на сервер
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Логируем ответ от сервера
    });
  }
  