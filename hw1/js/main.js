const products = [
    {id: 1, title: 'Notebook', price: 20000, img: 'img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 1500, img: 'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 5000, img: 'img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 4500, img: 'img/gamepad.jpg'},
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img class="image" src="${img}" alt="">
                <p>${(!price)?1000:price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.img));
    
    //document.querySelector('.products').innerHTML = productList;
    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
