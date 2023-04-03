let serial = 0;
// for coffee card
document.getElementById('coffee-btn').addEventListener('click', function(e){
    serial = serial + 1;
    // get the data from the html using id
    const productName = document.getElementById("coffee").innerText;
    const productPrice = document.getElementById('coffee-price').innerText;
    const productQuantity = document.getElementById('coffee-quantity').innerText;
    const total = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
});

// Using event object from browser
document.getElementById('heart-btn').addEventListener('click', function(e){
    serial = serial + 1;
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const total = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
});

document.getElementById('panda-btn').addEventListener('click', function (e) {
    serial = serial + 1;
    // get the data from the html using id
    const productName = document.getElementById("panda").innerText;
    const productPrice = document.getElementById('panda-price').innerText;
    const productQuantity = document.getElementById('panda-quantity').innerText;
    const total = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
});

document.getElementById('umbrella-btn').addEventListener('click', function (e) {
    serial = serial + 1;
    // get the data from the html using id
    const productName = document.getElementById("umbrella").innerText;
    const productPrice = document.getElementById('umbrella-price').innerText;
    const productQuantity = document.getElementById('umbrella-quantity').innerText;
    const total = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
});

document.getElementById('vue-btn').addEventListener('click', function (e) {
    serial = serial + 1;
    // get the data from the html using id
    const productName = document.getElementById("vue").innerText;
    const productPrice = document.getElementById('vue-price').value;
    const productQuantity = document.getElementById('vue-quantity').value;
    const total = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
});

// Show the data
function displayData(productName, productPrice, productQuantity, total) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${total}</td>
    `;
    container.appendChild(tr);
}