let value = 0;

function getContainer(event) {
    const element = event.childNodes[5].innerText;

    const newLi = document.createElement('li');

    newLi.innerText = element;

    const getName = document.getElementById('get-name');
    getName.appendChild(newLi);

    const shopCartPrice = event.childNodes[7].innerText.split(' ')[0];
    value = value + parseFloat(shopCartPrice)

    const TotalPrice = document.getElementById('Total-price').innerText = value.toFixed(2);

    if (value >= 200) {
        const discountBtn = document.getElementById('discount-btn');
        discountBtn.disabled = false;
    } else {
        discountBtn.disabled = true;
    }



    if (value >= 1) {
        const makePurchase = document.getElementById('btn-purchase');

        makePurchase.disabled = false;
        const totalPay = document.getElementById('total-pay');
        totalPay.innerText = value.toFixed(2);

    } else {
        makePurchase.disabled = true
    }

}

document.getElementById('btn-home').addEventListener('click', function () {
    window.location.href = 'https://gleeful-genie-66a4d7.netlify.app/'
})

const inputFild = document.getElementById('input-fild')
const discountBtn = document.getElementById('discount-btn');

const discountPrice = 0.20;

discountBtn.addEventListener('click', function () {

    if (inputFild.value === 'SELL200' && value >= 200) {
        const discountTotalMoney = value * discountPrice;
        const discount = document.getElementById('discount-money');
        discount.innerText = discountTotalMoney.toFixed(2);

        const pay = value - discountTotalMoney;
        const totalPay = document.getElementById('total-pay');
        totalPay.innerText = pay.toFixed(2);
    } else if (inputFild.value !== 'SELL200' || value <= 199) {
        const totalPay = document.getElementById('total-pay');
        totalPay.innerText = value.toFixed(2);

    }



})










