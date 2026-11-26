console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
const main = document.querySelector("main");
function renderProducts(products) {
  // your code goes here
  const ul = document.createElement("ul");
  main.appendChild(ul);
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${products[i].name}</h3>
    <p>Price: ${products[i].price}</p>
    <p>Rating: ${products[i].rating}/10</p>
`;
    ul.appendChild(li);
  }
}
renderProducts(products);
