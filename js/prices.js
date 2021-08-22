function calcAmount(){
    let price = 1000;
    let amountImput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountnumber = parseInt(amountImput.value);

    if (amountNumber > 10) {
        alert("Max 10 termék");
    } else if (amountNumber < 1){
        alert("min 1 termék");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }
}