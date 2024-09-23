// total balance 
const feniDonate = getValue('feni-input');
const qataDonate = getValue('quata-input');

// noakhali donate start 
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const DonateAmount = convertFloat(getValue('noakhali-input'));
    if (coinAmountInt < DonateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(DonateAmount)) {
        alert('Invaid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - DonateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('noakhali-amount'));
    getId('noakhali-amount').innerText = donate + DonateAmount;
})
// noakhali donate end
// feni donate start 
document.getElementById('feni-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const DonateAmount = convertFloat(getValue('feni-input'));
    if (coinAmountInt < DonateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(DonateAmount)) {
        alert('Invaid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - DonateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('feni-amount'));
    getId('feni-amount').innerText = donate + DonateAmount;
})
// feni donate end
// Quata donate start 
document.getElementById('quata-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const DonateAmount = convertFloat(getValue('quata-input'));
    if (coinAmountInt < DonateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(DonateAmount)) {
        alert('Invaid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - DonateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('quata-amount'));
    getId('quata-amount').innerText = donate + DonateAmount;
})
// Quata donate end