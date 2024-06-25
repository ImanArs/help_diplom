const baseURL = 'https://636a27e5b10125b78fd2189a.mockapi.io/shoes';

const shoesSection = document.querySelector('#shoes');

// Ensure cart is defined as an array. If cart is supposed to be dynamic, make sure it's initialized properly before this function runs.

const getAllShoes = () => {
  return fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      let html = ''; // Initialize the html string
      data.reverse().forEach(item => {
        // Check if cart is defined and is an array before using .some()
        const isInCart = Array.isArray(cart) && cart.some(cartItem => cartItem.id === item.id);
        
        html += `
          <div class="shoe">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} $</p>
            <div>
              <button onclick="updateShoe(${item.id})">Изменить</button>
              <button onclick="deleteShoe(${item.id})">удалить</button>
            </div>
          </div>
        `;
      });
      shoesSection.innerHTML = html; // Update the DOM with the new html string
    })
    .catch(error => console.error('Error fetching data:', error));
}
getAllShoes();

function addShoe(shoe) {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shoe),
  })
    .then(response => response.json())
    .then(data => {
      getAllShoes()  
    })
    .catch(error => console.error('Error adding shoe:', error));
}

document.querySelector('#formAdd').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve the values from the inputs and select
  const name = document.querySelector('.form input[placeholder="name"]').value;
  const price = document.querySelector('.form input[placeholder="price"]').value;
  const category = document.querySelector('.form select').value;

  // Construct the object with the form data
  const formData = {
    image: 'https://i.ebayimg.com/images/g/lrUAAOSwL2BjbaPv/s-l1200.jpg',
    name,
    price,
    category
  };

  // Log the object to the console
  addShoe(formData);
  getAllShoes()
});

function updateShoe(id, shoe) {
  return fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shoe),
  })
    .then(response => response.json())
    .then(data => {
      getAllShoes()
    })
    .catch(error => console.error('Error updating shoe:', error));
}

function deleteShoe(id) {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      getAllShoes()
    })
    .catch(error => console.error('Error deleting shoe:', error));
}

const shoeExample = {
  id: 10,
  name: 'Dr. Martens 1460',
  price: 140,
  image: 'https://via.placeholder.com/150',
  category: 'season'
};

// Example usage
// getAllShoes();
// addShoe(shoeExample);
// updateShoe(10, { ...shoeExample, price: 150 }); // Example of updating the price
// deleteShoe(10);