// Получаем элементы с заданными идентификаторами из DOM
const header_cart = document.querySelector('#header-cart');
const cart_content = document.querySelector('#cart_content');
const cart_counter = document.querySelector('#cart-counter');

// Получаем корзину из локального хранилища или создаем пустую корзину, если её нет
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для обновления модального окна корзины
const updateCartModal = () => {
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Считаем общее количество товаров в корзине
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Считаем общую сумму товаров в корзине
  const totalSum = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Создаем HTML-код для модального окна корзины
  const cart_html = `
    <div class="modal">
      <div class="header">
        <button class="close" id="close">x</button>
      </div>
      <div class="content">
        <ul>
          ${cart.map(item => `<li><p>${item.name} - ${item.price} $ - ${item.quantity} шт.</p> <button id="delete" onclick="deleteShoe(${item.id})">del</button></li>`).join('')}
        </ul>
        <p>Товаров в корзине: ${itemCount}</p>
        <p>Сумма: ${totalSum} $</p>
        <button id="checkout">Оформить заказ</button>
      </div>
    </div>
  `;
  return cart_html;
};

// Функция для открытия модального окна
function openModal() {
  // Обновляем содержимое корзины
  cart_content.innerHTML = updateCartModal();

  // Добавляем событие на кнопку закрытия модального окна
  document.querySelector('#close').addEventListener('click', closeModal);

  // Добавляем событие на кнопку "Оформить заказ"
  document.querySelector('#checkout').addEventListener('click', openCheckoutModal);
}

const deleteShoe = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== String(id));
  localStorage.setItem('cart', JSON.stringify(cart));
  // updateCartModal();
  updateCartCount();
  openModal();
  filterShoes(currentCategory);
}
// Функция для закрытия модального окна
function closeModal() {
  // Очищаем содержимое корзины
  cart_content.innerHTML = '';
}

// Функция для обновления количества товаров в значке корзины
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Считаем общее количество товаров в корзине
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Обновляем текстовое содержимое элемента счетчика корзины
  cart_counter.textContent = itemCount;
};

// Вызовите эту функцию каждый раз при обновлении корзины
updateCartCount();

// Добавляем событие на значок корзины для открытия модального окна
header_cart.addEventListener('click', openModal);

// Функция для открытия модального окна оформления заказа
function openCheckoutModal() {
  const checkout_html = `
    <div class="modal">
      <div class="header">
        <button class="close" id="closeCheckout">x</button>
      </div>
      <div class="content">
        <form id="checkoutForm">
          <input type="text" id="fio" placeholder="ФИО" required>
          <input type="text" id="address" placeholder="Адрес" required>
          <input type="tel" id="phone" placeholder="Номер телефона" required>
          <button type="submit">Подтвердить заказ</button>
        </form>
      </div>
    </div>
  `;
  
  cart_content.innerHTML = checkout_html;

  // Добавляем событие на кнопку закрытия модального окна оформления заказа
  document.querySelector('#closeCheckout').addEventListener('click', closeModal);

  // Добавляем обработчик отправки формы
  document.querySelector('#checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('cart', JSON.stringify([]));
    // Здесь можно добавить обработку заказа
    alert('Заказ подтвержден!');
    closeModal();
  });
}
