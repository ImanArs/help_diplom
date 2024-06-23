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

const aside = document.querySelector('#aside');
const shoes = document.querySelector('#shoes');
let allShoesData = [];

const renderAside = () => {
  let html = '';
  categories.forEach(category => {
    html += `<button data-key="${category.key}">${category.label}</button>`;
  });
  aside.innerHTML = html;
};

const renderShoes = (data) => {
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

let currentCategory = 'all'; // Шаг 1: Глобальная переменная для хранения текущей категории

const filterShoes = (category) => {
  currentCategory = category; // Шаг 2: Обновляем текущую категорию при каждом вызове filterShoes
  if (category === 'all') {
    renderShoes(allShoesData);
  } else {
    const filteredData = allShoesData.filter(item => item.category === category);
    renderShoes(filteredData);
  }
};

const addToCart = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const itemToAdd = allShoesData.find(item => item.id === id);
    if (itemToAdd) {
      cart.push({ ...itemToAdd, quantity: 1 });
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  filterShoes(currentCategory); // Шаг 3: Используем текущую категорию для фильтрации
  updateCartCount();
};

const removeFromCart = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  filterShoes(currentCategory); // Шаг 3: Используем текущую категорию для фильтрации
  updateCartCount();
};

const getData = async () => {
  const response = await fetch('https://636a27e5b10125b78fd2189a.mockapi.io/shoes');
  const data = await response.json();
  allShoesData = data;
  renderShoes(data);
};

renderAside();
getData();

aside.addEventListener('click', (event) => {
  const key = event.target.getAttribute('data-key');
  if (key) {
    filterShoes(key);
  }
});