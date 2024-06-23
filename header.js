const header_cart = document.querySelector('#header-cart');
const cart_content = document.querySelector('#cart_content');

const cart = localStorage.getItem('cart') || [];

const cart_html = `
<div class="modal">
  <div class="header">
    <button id="close">close</button>
  </div> 
  <div class="content">
    <p>Товаров в корзине: 0</p>
    <p>Сумма: 0</p>
  </div>
</div>
`;

function openModal() {
  cart_content.innerHTML = cart_html;
  document.querySelector('#close').addEventListener('click', closeModal);
}

function closeModal() {
  cart_content.innerHTML = '';
}

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  header_cart.textContent = `Cart (${itemCount})`;
};

// Вызовите эту функцию каждый раз при обновлении корзины
updateCartCount();

header_cart.addEventListener('click', openModal);
