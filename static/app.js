document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("payment-form");
  const comprarButton = document.getElementById("comprar");
  const productList = document.getElementById("product-list");
  const cart = document.getElementById("cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let totalPrice = 0; // Initialize total price

  // Add products to the cart
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = event.target.getAttribute("data-product");
      const price = parseFloat(event.target.getAttribute("data-price"));

      // Update total price
      totalPrice += price;

      // Add product to cart
      const listItem = document.createElement("li");
      listItem.textContent = `${product} - $${price.toFixed(2)}`;
      cartItems.appendChild(listItem);

      // Update total price display
      cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;

      // Disable the button after adding
      event.target.disabled = true;
      event.target.textContent = "Added";
    });
  });

  // Show the payment form and hide other elements
  if (comprarButton) {
    comprarButton.addEventListener("click", () => {
      // Show the payment form
      if (paymentForm) {
        paymentForm.style.display = "block"; // Make the form visible
        paymentForm.scrollIntoView({ behavior: "smooth" }); // Ensure the form is visible
      }

      // Hide other elements
      if (comprarButton) comprarButton.style.display = "none"; // Hide the "Comprar" button
      if (productList) productList.style.display = "none"; // Hide the product list
      if (cart) cart.style.display = "none"; // Hide the cart
    });
  }
});
