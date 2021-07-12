const validator = {
  isValid: function (creditCardNumber) {
    if(!creditCardNumber) return false
    let NumbersCard = []
    NumbersCard = creditCardNumber.split("").reverse().map(function(number, index){
        if(index%2===1){
            let valueDouble = number * 2
            if (valueDouble >= 10) {
            return valueDouble-9;
              }
            return number * 2
        }
        return parseInt(number)
        
    })
    let total = 0;
    for (let i = 0; i < NumbersCard.length; i++){
      total = total += NumbersCard[i]; 
    }
    if (total%10===0){
      return true;
    } else {
      return false;
    }
  },
  maskify: function (creditCardNumber){
    let ocultado = []
    for (let i = 0; i < creditCardNumber.length; i++){
      if(i < creditCardNumber.length-4){
        ocultado.push("#");
        } else {
        ocultado.push(creditCardNumber[i]);
      }
    }
    return ocultado.join("");
  } 
};

export default validator;