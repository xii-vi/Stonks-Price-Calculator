var initial = document.querySelector("#initial");
var quantity = document.querySelector("#quantity");
var current = document.querySelector("#current");
var submitBtn = document.querySelector("#submitbtn");
var outputBox = document.querySelector("#output-box");

function profitAndLoss(initial, quantity, current) {

    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((initial - current)/ initial) * 100;

        showOutput("The Loss Is " + loss.toFixed(2) + " And the loss percentage is " + lossPercentage.toFixed(2) + "%");

    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = ( (current - initial)/ initial) * 100;
        showOutput("The Profit Is " + profit.toFixed(2) + " And the Profit percentage is " + profitPercentage.toFixed(2) + "%");
    } else if (initial = current) {
        showOutput("Nothing To Worry. Everything is as it should be.");
    } else {
        alert("Don't be smarty-pants. Please enter Required value");
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

function eventHandler() {
    var ip = Number(initial.value);
    var qty = Number(quantity.value);
    var curr = Number(current.value);
    if(ip=="" || qty==""|| curr=="")
    {
        showOutput('Please Enter Valid Inputs');
    }
    else{
        profitAndLoss(ip, qty, curr);
    }
}

submitBtn.addEventListener('click', eventHandler);

