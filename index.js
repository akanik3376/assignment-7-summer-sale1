let value = 0;

function getContainer(event) {
    const element = event.childNodes[5].innerText;
    const newOl = document.createElement('ol');
    newOl.innerText = element;

    const getName = document.getElementById('get-name');
    getName.appendChild(newOl);

    const shopCartPrice = event.childNodes[7].innerText.split(' ')[0];
    value = value + parseFloat(shopCartPrice)

    const TotalPrice = document.getElementById('Total-price').innerText = value.toFixed(2);


    const getDiscount = document.getElementById('discount-btn').addEventListener('click', function () {

    })
}



