export const cart = [
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

export const addToCart = (productId) => {
  let matchItem;

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchItem = item;
    }
  });

  const quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );

  if (matchItem) {
    matchItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
};

export const updateCart = () => {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
};
