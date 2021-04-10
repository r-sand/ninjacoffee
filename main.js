// Toggle the Navbar Menu when in Mobile
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('#navbar-menu');

navbarBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

// Toggle the Tabbed Content
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

for (let tab of tabs) {
    tab.addEventListener('click', () => {
        for (let tab of tabs) {
            tab.classList.remove('is-active');
        }
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        for (let box of tabContentBoxes) {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        }

    })
}

// Sign Up Modal Toggler
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('#signup-modal-background');
const modal = document.querySelector('#signup-modal');

signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

// Products List Array & Object
const products = [
    {
        name: 'Cortado Cup',
        price: 6.95,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus! Maiores libero obcaecati consequuntur! Repudiandae enim perferendis sed ad tempore? Rerum quas esse nisi laborum neque soluta, repellendus omnis recusandae.'
    },
    {
        name: 'Docker Light',
        price: 14.95,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus! Maiores libero obcaecati consequuntur! Repudiandae enim perferendis sed ad tempore? Rerum quas esse nisi laborum neque soluta, repellendus omnis recusandae.'
    },
    {
        name: 'Coffee Crush',
        price: 8.95,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus! Maiores libero obcaecati consequuntur! Repudiandae enim perferendis sed ad tempore? Rerum quas esse nisi laborum neque soluta, repellendus omnis recusandae.'
    }
]

// View Product Modal Toggler
const cardLinks = document.querySelectorAll('.card-footer-item > a');
const cardModalBackground = document.querySelector('#view-product-background');
const cardModal = document.querySelector('#view-product-modal');

const productImage = document.querySelector('#view-product-image');
const productName = document.querySelector('#view-product-name');
const productInfo = document.querySelector('#view-product-info');
const productPrice = document.querySelector('#view-product-price');

for (let i = 0; i < cardLinks.length; i++) {
    let link = cardLinks[i];
    link.addEventListener('click', () => {
        cardModal.classList.add('is-active');
        productImage.src = `./assets/p${i + 1}.png`;
        productName.textContent = `${products[i].name}`;
        productInfo.textContent = `${products[i].info}`;
        productPrice.textContent = `$${products[i].price}`;
    })
}

cardModalBackground.addEventListener('click', () => {
    cardModal.classList.remove('is-active');
})

