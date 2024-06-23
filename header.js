const header_cart = document.querySelector('#header-cart');
const cart_content = document.querySelector('#cart_content');
const cart_counter = document.querySelector('#cart-counter');

const cart = localStorage.getItem('cart') || [];

const updateCartModal = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalSum = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const cart_html = `
  <div class="modal">
    <div class="header">
      <button class="close" id="close">
        x 
      </button>
    </div> 
    <div class="content">
      <ul>
        ${cart.map(item => `<li>${item.name} - ${item.price} $ - ${item.quantity} шт.</li>`).join('')}
      </ul>
      <p>Товаров в корзине: ${itemCount}</p>
      <p>Сумма: ${totalSum} $</p>
      <button>Оформить заказ</button>
    </div>
  </div>
  `;

  return cart_html;
};

function openModal() {
  cart_content.innerHTML = updateCartModal();
  document.querySelector('#close').addEventListener('click', closeModal);
}

function closeModal() {
  cart_content.innerHTML = '';
}

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  cart_counter.textContent = itemCount;
};

// Вызовите эту функцию каждый раз при обновлении корзины
updateCartCount();

header_cart.addEventListener('click', openModal);
