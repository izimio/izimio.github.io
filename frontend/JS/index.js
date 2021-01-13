const allCards = [
    document.getElementById('productCard1'),
    document.getElementById('productCard2'),
    document.getElementById('productCard3'),
    document.getElementById('productCard4'),
    document.getElementById('productCard5')
];
let i = -1;
let numberOfItemsInTheCard = 0;

function GET(index, value) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            value.innerHTML = `<a href="../html/product_id=${response[index]._id}.html">
                <div class="productCard_img">
                    <img src="${response[index].imageUrl}" alt="photo de ${response[index].name}">
                </div>
                <div class="productCard_caption">
                    <div class="productCard_caption-upper">
                        <div class="productCard_caption-upper-name">
                            <h2>${response[index].name}</h2>
                        </div>
                        <div class="productCard_caption-upper-price">
                            <p>${response[index].price} €</p>
                        </div>
                    </div>
                    <div class="productCard_caption-lower">
                        <p class="productCard_caption-lower-description">${response[index].description}</p>
                    </div>
                    <a href="shoppingCart.html">
                        <div class="productCard_caption-lower-addtocart" onclick="addToBasket()">
                            <span>Ajouter au panier</span>
                            <i class="fas fa-cart-plus"></i>
                        </div>
                    </a>
                </div>
            </a>`;
        }
    };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
};

while (allCards[++i]) {
    GET(i, allCards[i]);
}

const addToBasket = (event) =>{
    numberOfItemsInTheCard++;
    cartIndex.innerHTML = numberOfItemsInTheCard;
}