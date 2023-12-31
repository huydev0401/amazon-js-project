import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { moneyCalculator } from "./utils/money.js";

let checkoutHTML = "";

cart.forEach((cartItem) => {
  let matchItem;
  products.forEach((productItem) => {
    if (productItem.id === cartItem.productId) {
      matchItem = productItem;
    }
  });
  checkoutHTML += `
  <div class="cart-item-container-${matchItem.id}">
    <div class="delivery-date">Delivery date: Tuesday, June 21</div>

      <div class="cart-item-details-grid">
        <img
          class="product-image"
          src="${matchItem.image}"
        />

        <div class="cart-item-details">
          <div class="product-name">
           ${matchItem.name}
          </div>
          <div class="product-price">$${moneyCalculator(
            matchItem.priceCents
          )}</div>
          <div class="product-quantity">
            <span> Quantity: <span class="quantity-label">${
              cartItem.quantity
            }</span> </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span data-product-id="${
              matchItem.id
            }" class="delete-quantity-link link-primary js-delete-quantity-link">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              checked
              class="delivery-option-input"
              name="delivery-option-${matchItem.id}"
            />
            <div>
              <div class="delivery-option-date">Tuesday, June 21</div>
              <div class="delivery-option-price">FREE Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchItem.id}"
            />
            <div>
              <div class="delivery-option-date">Wednesday, June 15</div>
              <div class="delivery-option-price">$4.99 - Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchItem.id}"
            />
            <div>
              <div class="delivery-option-date">Monday, June 13</div>
              <div class="delivery-option-price">$9.99 - Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector(".order-summary").innerHTML = checkoutHTML;

document.querySelectorAll(".js-delete-quantity-link").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    removeFromCart(productId);
    const container = document.querySelector(
      `.cart-item-container-${productId}`
    );
    container.remove();
  });
});
