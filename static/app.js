document.addEventListener("DOMContentLoaded", () => {
    // Get references to the elements
    const paymentForm = document.getElementById("payment-form");
    const comprarButton = document.getElementById("comprar");
    const productList = document.getElementById("product-list");
    const cart = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
  
    // Hide the payment form on page load
    if (paymentForm) {
      paymentForm.style.display = "none";
    }
  
    // Add products to the cart
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.getAttribute("data-product");
  
        // Add product to cart
        const listItem = document.createElement("li");
        listItem.textContent = product;
        cartItems.appendChild(listItem);
  
        // Disable the button after adding
        event.target.disabled = true;
        event.target.textContent = "Added";
      });
    });
  
    // Add click event listener to the 'comprar' button
    if (comprarButton) {
      comprarButton.addEventListener("click", () => {
        // Show the payment form
        if (paymentForm) {
          paymentForm.style.display = "block";
        }
  
        // Hide the 'comprar' button
        comprarButton.style.display = "none";
  
        // Hide the product list
        if (productList) {
          productList.style.display = "none";
        }
  
        // Hide the cart
        if (cart) {
          cart.style.display = "none";
        }
      });
    }
  });
  