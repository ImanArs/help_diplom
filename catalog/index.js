// // Массив категорий обуви с ключами и метками
const categories = [
  {
    key: 'all',
    label: 'все'
  },
  {
    key: 'season',
    label: 'сезонная обувь'
  },
  {
    key: 'sport',
    label: 'спортивная обувь'
  },
  {
    key: 'business',
    label: 'деловая обувь'
  },
  {
    key: 'casual',
    label: 'повседневная обувь'
  }
];

// Получаем элементы с заданными идентификаторами из DOM
const aside = document.querySelector('#aside');
const shoes = document.querySelector('#shoes');

const getData = async () => {
  const response = await fetch('https://636a27e5b10125b78fd2189a.mockapi.io/shoes');
  const data = await response.json();
  return data
}

// Функция для рендеринга (отображения) боковой панели с категориями
const renderAside = () => {
  let html = '';
  categories.forEach(category => {
    console.log(category.key);
    html += `<button data-key="${category.key}">${category.label}</button>`;
  });
  aside.innerHTML = html;
};
renderAside()

// // Функция для рендеринга (отображения) обуви
const renderShoes = async (data) => {
  // const shoesData = await getData();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let html = '';
  data.forEach(item => {
    const isInCart = cart.some(cartItem => cartItem.id === item.id);
    html += `
      <div class="shoe">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price} $</p>
        <button onclick="${isInCart ? `removeFromCart(${item.id})` : `addToCart(${item.id})`}">${isInCart ? 'Убрать из корзины' : 'Купить'}</button>
      </div>
    `;
  });
  shoes.innerHTML = html;
};
// Глобальная переменная для хранения текущей категории
let currentCategory = 'all';

// // Функция для фильтрации обуви по категориям
const filterShoes = async (category = 'all') => {
  currentCategory = category; // Обновляем текущую категорию при каждом вызове filterShoes
  const shoesData = await getData();
  if (category === 'all') {
    renderShoes(shoesData);
  } else {
    const filteredData = shoesData.filter(item => item.category === category);
    renderShoes(filteredData);
  }
};
filterShoes('all')

// // Функция для добавления товара в корзину
const addToCart = async (id) => {
  const shoesData = await getData();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === String(id));
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const itemToAdd = shoesData.find(item => item.id === String(id));
    console.log(shoesData);
    console.log(id);
    if (itemToAdd) {
      cart.push({ ...itemToAdd, quantity: 1 });
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  filterShoes(currentCategory);
  updateCartCount();
};

// Функция для удаления товара из корзины
const removeFromCart = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== String(id));
  localStorage.setItem('cart', JSON.stringify(cart));
  filterShoes(currentCategory);
  updateCartCount();
};


// Добавляем обработчик событий на боковую панель для фильтрации обуви
aside.addEventListener('click', (event) => {
  const key = event.target.getAttribute('data-key');
  console.log(key);
  if (key) {
    filterShoes(key);
  }
});
