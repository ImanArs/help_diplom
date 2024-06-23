const header_cart = document.querySelector('#header-cart');
const cart_content = document.querySelector('#cart_content'); // Исправлено имя переменной

const cart_html = `
<div class="modal">
  <div class="header">
    <button id="close">close</button>
  </div> 
</div>
`;

// Функция для открытия модального окна
function openModal() {
  cart_content.innerHTML = cart_html;
  document.querySelector('#close').addEventListener('click', closeModal);
}

function closeModal() {
  cart_content.innerHTML = '';
  console.log(cart_content);
  console.log('close');
}

header_cart.addEventListener('click', openModal);
