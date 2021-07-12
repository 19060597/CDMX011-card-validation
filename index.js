import validator from './validator.js';4

const input = document.querySelector('#input')

input.addEventListener('keydown', onlyNumbers)

function onlyNumbers(creditCardNumber) {
let only = /^\d$/
 if(creditCardNumber.keyCode == only || creditCardNumber.keyCode <= 57 && creditCardNumber.keyCode != 32) {
      return true;
}
creditCardNumber.preventDefault();
}
const capture = document.getElementById('capture')

capture.addEventListener('click', function(){
    let numbersCard = document.getElementById("input").value;
    let validador = validator.isValid(numbersCard);
    document.getElementById("input").value = validator.maskify(numbersCard);
    if(validador === true){
        document.getElementById("result").innerHTML = "Tarjeta valida";
    }else{
        document.getElementById("result").innerHTML = "Tarjeta inválida";
    }
})