function ticketHandlerChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true && ticketCount < 10) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let totalTicket = 0;
    if (ticket == 'first') {
        totalTicket = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        totalTicket = ticketNewCount * 100;
    }
    calculateTotal();
}

function calculateTotal() {
    const firstClass = getInputValue('first');
    const economyClass = getInputValue('economy');
    const subTotal = firstClass * 150 + economyClass * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;
    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;
    const grandTotal = subTotal + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

    //after submit ticket total Amount
    document.getElementById('totalAmount').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = Number(ticketInput.value);
    return ticketCount;
}

//submit book-now area
const bookingBtn = document.getElementById("book-now");
bookingBtn.addEventListener("click", function () {
    const bookingArea = document.getElementById("booking-area");
    bookingArea.style.display = "none";
    const submitArea = document.getElementById("submit-area");
    submitArea.style.display = "block";
})