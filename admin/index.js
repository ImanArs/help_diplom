// Базовый URL для получения данных о обуви
const baseURL = 'https://636a27e5b10125b78fd2189a.mockapi.io/shoes';

// Получаем элемент секции обуви из DOM
const shoesSection = document.querySelector('#shoes');
const formToLogin = document.querySelector('#formToLogin');
const adminContent = document.querySelector('#adminContent');

const mainFormForAdmin = () => {
  adminContent.style.display = 'none'
  formToLogin.style.display = 'block'
  const formAdmin = `
    <div class="form">
    <h1>Войдите в аккаунт админа</h1>
      <form id="formAdd">
        <input type="text" id="login" placeholder="login">
        <span id="loginErr"></span>
        <input type="password" id="password" placeholder="password">
        <span id="passwordErr"></span>
        <button type="submit">Login</button>
      </form>
    </div>
  `;

  formToLogin.innerHTML = formAdmin;


  const form = document.getElementById('formAdd');
  const loginErr = form.querySelector('#loginErr')
  const passwordErr = form.querySelector('#passwordErr')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    console.log('Login:', login);
    console.log('Password:', password);
    // You can add further processing here, such as sending data to the server
    if (login === '123' && password === '123') {
      adminContent.style.display = 'block'
      formToLogin.style.display = 'none'
    }
    if (login !== '123') {
      loginErr.innerText = 'имя 123'
    }
    if (password !== '123') {
      passwordErr.innerText = 'пароль 123'
    }
  });
}

mainFormForAdmin();

// Убедитесь, что корзина определена как массив. Если корзина должна быть динамичной, убедитесь, что она инициализирована правильно перед вызовом этой функции.

// Функция для получения всех данных о обуви с сервера
const getAllShoes = () => {
  return fetch(baseURL) // Отправляем запрос на сервер
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
      let html = ''; // Инициализируем строку для HTML
      data.reverse().forEach(item => {
        // Перебираем все элементы массива данных и создаем HTML-код для каждого элемента
        html += `
          <div class="shoe">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} $</p>
            <div>
              <button onclick="showModalAdmin(${item.id})">Изменить</button>
              <button onclick="deleteShoe(${item.id})">Удалить</button>
            </div>
          </div>
        `;
      });
      shoesSection.innerHTML = html; // Обновляем содержимое секции обуви новым HTML-кодом
    })
    .catch(error => console.error('Error fetching data:', error)); // Обрабатываем ошибки, если они возникают
}
getAllShoes(); // Вызываем функцию для получения всех данных о обуви при загрузке страницы

const modalWrapper = document.querySelector('#modalWrapper');
const closeModalAdmin = () => {
  modalWrapper.innerHTML = '';
}
const showModalAdmin = async (id) => {
  const response = await fetch(`${baseURL}/${id}`)
  const data = await response.json();
  console.log(data);
  let html = `
    <div class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModalAdmin()">&times;</span>
        <form id="formUpdate">
          <input type="text" id="name" placeholder="name">
          <input type="text" id="price" placeholder="price">
          <input type="text" id="image" placeholder="image">
          <select name="" id="updateFormSelect">
            <option value="sport">sport</option>
            <option value="casual">casual</option>
            <option value="season">season</option>
            <option value="business">business</option>
          </select>
          <button type="submit">Изменить</button>
        </form>
    </div>
  `
  modalWrapper.innerHTML = html;
  document.querySelector('#formUpdate').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значения из полей ввода и выпадающего списка
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').value;
    const category = document.querySelector('#updateFormSelect').value;

    // Создаем объект с данными формы
    const formData = {
      image,
      name,
      price,
      category
    };

    // Вызываем функцию обновления обуви с переданным объектом данных
    
    updateShoe(id, formData);
    closeModalAdmin()
  });

}
// Функция для добавления новой обуви на сервер
function addShoe(shoe) {
  return fetch(baseURL, {
    method: 'POST', // Указываем метод запроса POST для добавления данных
    headers: {
      'Content-Type': 'application/json', // Указываем тип содержимого - JSON
    },
    body: JSON.stringify(shoe), // Преобразуем объект обуви в строку JSON
  })
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
      getAllShoes(); // Обновляем данные о всей обуви после добавления новой
    })
    .catch(error => console.error('Error adding shoe:', error)); // Обрабатываем ошибки, если они возникают
}

// Добавляем обработчик события для формы добавления обуви
document.querySelector('#formAdd').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  // Получаем значения из полей ввода и выпадающего списка
  const name = document.querySelector('.form input[placeholder="name"]').value;
  const price = document.querySelector('.form input[placeholder="price"]').value;
  const image = document.querySelector('.form input[placeholder="image"]').value;
  const category = document.querySelector('.form select').value;

  // Создаем объект с данными формы
  const formData = {
    image,
    name,
    price,
    category
  };

  // Добавляем новую обувь и обновляем данные о всей обуви
  addShoe(formData);
  getAllShoes();
});

// Функция для обновления данных о обуви на сервере
function updateShoe(id, shoe) {
  return fetch(`${baseURL}/${id}`, {
    method: 'PUT', // Указываем метод запроса PUT для обновления данных
    headers: {
      'Content-Type': 'application/json', // Указываем тип содержимого - JSON
    },
    body: JSON.stringify(shoe), // Преобразуем объект обуви в строку JSON
  })
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
      getAllShoes(); // Обновляем данные о всей обуви после обновления
    })
    .catch(error => console.error('Error updating shoe:', error)); // Обрабатываем ошибки, если они возникают
}

// Функция для удаления данных о обуви с сервера
function deleteShoe(id) {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE', // Указываем метод запроса DELETE для удаления данных
  })
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(() => {
      getAllShoes(); // Обновляем данные о всей обуви после удаления
    })
    .catch(error => console.error('Error deleting shoe:', error)); // Обрабатываем ошибки, если они возникают
}



