const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseButton = document.querySelector(".product-detail-close")
const cardsContainer = document.querySelector('.cards-container');

function toggleDesktopMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isShoppingCartContainerClosed) shoppingCartContainer.classList.add('inactive');

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isShoppingCartContainerClosed) shoppingCartContainer.classList.add('inactive');

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetail.classList.contains('inactive');

  if (!isMobileMenuClosed) mobileMenu.classList.add('inactive');
  if (!isDesktopMenuClosed) desktopMenu.classList.add('inactive');
  if (!isProductDetailClosed) productDetail.classList.add('inactive');

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseButton.addEventListener('click', closeProductDetailAside);

const productsList = [];
productsList.push({
  name: 'Metallica album',
  price: 22,
  image: 'https://m.media-amazon.com/images/I/71z4zm5yohL._AC_SL1425_.jpg'
});
productsList.push({
  name: 'Metallica album',
  price: 22,
  image: 'https://m.media-amazon.com/images/I/71z4zm5yohL._AC_SL1425_.jpg'
});
productsList.push({
  name: 'Metallica album',
  price: 22,
  image: 'https://m.media-amazon.com/images/I/71z4zm5yohL._AC_SL1425_.jpg'
});      

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const addToCartImg = document.createElement('img');
    addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(addToCartImg);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.append(productCard);
  }
}

renderProducts(productsList);