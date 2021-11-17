let rows = +prompt('Kvadrat eni va bo\'yi uchun uzunlik kiriting (raqamlarda)')
while (rows == false || isNaN(rows)) {
    rows = +prompt('Kvadrat eni va bo\'yi uchun uzunlik kiriting (raqamlarda)')
}
let symbolCon = confirm('Kvadrat yasovchi belgi kiritasizmi?')

let symbol;
if (symbolCon == true) {
    symbol = prompt('belgi kiriting')
    while (symbol == '') {
        symbol = prompt('belgi kiriting')
    }
} else {
    symbol = '{*}'
}

let square = ''

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < rows; col++) {
        if (col == row || row == rows - 1 || row == 0 || col == 0 || col == rows - 1) {
            if (symbol.length == 1) {
                square += `${symbol}`
            } else {
                square += `${symbol}`
            }
        } else {
            if (symbol.length == 1) {
                square += ' '
            } else if (symbol.length == 2) {
                square += '  ' 
            } else {
                square += '   ' 
            }
        }
    }
    console.log(square);
    square = ''
}

alert('F12 orqali natijani tekshiring')