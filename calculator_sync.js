const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const argumento = process.argv.slice(2);

function operation(url, intA, intB, operation) {
    let result;
    switch(operation) {
        case 'adicionar':
            result = intA + intB;
            break;
        case 'subtrair':
            result = intA - intB;
            break;
        case 'multiplicar':
            result = intA * intB;
            break;
        case 'dividir':
            result = intA / intB;
            break;
        default:
            console.log('Operação inválida. Por favor, escolha entre adicionar, subtrair, multiplicar ou dividir.');
            return;
    }
    
    console.log(`Resultado da operação ${operation}: ${result}`);
}

operation(url, parseInt(argumento[0]), parseInt(argumento[1]), argumento[2]);
