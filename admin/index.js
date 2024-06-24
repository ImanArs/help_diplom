const baseURL = 'https://636a27e5b10125b78fd2189a.mockapi.io/shoes';

function getAllShoes() {
  return fetch(baseURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
}

function addShoe(shoe) {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shoe),
  })
    .then(response => response.json())
    .then(data => console.log('Shoe added:', data))
    .catch(error => console.error('Error adding shoe:', error));
}

function updateShoe(id, shoe) {
  return fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shoe),
  })
    .then(response => response.json())
    .then(data => console.log('Shoe updated:', data))
    .catch(error => console.error('Error updating shoe:', error));
}

function deleteShoe(id) {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => console.log('Shoe deleted'))
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