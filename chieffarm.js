const prompt = require('prompt-sync')();

//ask for T

const T = parseFloat(prompt('Enter Number of Test Cases: '))

if (T < 1 || T > 105) {
    console.log("invalid value")
}

for (i = 0; i < T; i++) {

    //ask for C, D, L
    const C = prompt('Enter Number of Cats: ')
    const D = prompt('Enter Number of Dogs: ')
    const L = prompt('Enter Number of Legs: ')

    maxNumberOfLegs = ((C * 4) + (D * 12))

    minNumberOfLegs = (D * 4)

    maxNumberOfCatCarries = (D * 2)
    if (C > maxNumberOfCatCarries) {
        excess = C - maxNumberOfCatCarries
        minNumberOfLegs += (excess * 4)
    }

    if (L > maxNumberOfLegs || L < minNumberOfLegs || L % 4 != 0) {
        console.log('no')
    }
    else {
        console.log('yes')
    }
}


