function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
    var price;
    var quantity;
    var totalUnit;
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
                totalUnit = childrens[j].firstElementChild.innerHTML = (price * quantity)
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

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

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