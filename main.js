// dollar-cents-converter

function formatMoney(amount){
    // your formatting code here
    const amountStr = amount.toString();
    const [dollars, cents] = amountStr.split('.');
    const formattedCents = cents ? cents.padEnd(2, '0') : '00';
    return '$' + dollars + '.' + formattedCents;
    }