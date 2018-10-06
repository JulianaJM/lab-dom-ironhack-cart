function deleteItem(e) {
    var productToDelete = e.target.parentNode.parentNode;
    //remove all child
    while (productToDelete.firstChild) {
        productToDelete.removeChild(productToDelete.firstChild);
    }
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
    var price = 0;
    var quantity = 0;
    var totalUnit = 0;
    var total = 0;
    var products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {

        var childrens = products[i].childNodes;
        for (var j = 0; j < childrens.length; j++) {
            if (childrens[j].className === 'price-container') {
                price = childrens[j].firstElementChild.innerText
            }

            if (childrens[j].className === 'quantity-container') {
                quantity = childrens[j].lastElementChild.value
            }

            if (childrens[j].className === 'total-container') {
                totalUnit = childrens[j].firstElementChild.innerHTML = price * quantity
            }

        }
        total += totalUnit

    }

    document.getElementById('total-prices').innerHTML = total;

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow() {


}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    for (var i = 0; i < newNode.childNodes.length; i++) {
        if (newNode.childNodes[i].className === 'btn-delete-container') {
            var deleteButtons = document.getElementsByClassName('btn-delete');

            deleteButtons[deleteButtons.length - 1].onclick = deleteItem;

        }
    }
}

function createNewItem() {
    var product = {
        name: document.getElementById('new-product-name').value,
        price: document.getElementById('new-product-price').value,
        quantity: document.getElementById('new-product-quantity').value
    }

    var total = (product.price * product.quantity);

    var lastProductList = document.getElementsByClassName('product-container')[0].lastElementChild;

    var newProductLine = document.createElement('div');
    newProductLine.setAttribute('class', 'product');

    newProductLine.innerHTML = '<div>' +
        '<span>Name : ' + product.name + '</span>' +
        '</div>' +
        '<div class="price-container">' +
        ' $<span id="price">' + product.price + '</span>' +
        '</div>' +
        '<div class="quantity-container">' +
        '<label for="quantity">QTY : </label>' +
        '<input class="input" type="text" id="quantity-2" value=' + product.quantity + '>' +
        '</div>' + '<div class="total-container">' +
        '$<span id="total-2">' + total + '</span>' +
        '</div>' +
        '<div class="btn-delete-container">' +
        '<button class="btn btn-delete">Delete</button>';

    insertAfter(newProductLine, lastProductList);

}

window.onload = function() {

    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};