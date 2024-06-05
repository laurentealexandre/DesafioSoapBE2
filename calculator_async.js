const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const argumento = process.argv.slice(2);

function operation(url, intA, intB, operation) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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
                    reject(new Error('Operação inválida. Por favor, escolha entre adicionar, subtrair, multiplicar ou dividir.'));
                    return;
            }
            
            resolve(`Resultado da operação ${operation}: ${result}`);
        }, 0);
    });
}

async function execute() {
    try {
        const result = await operation(url, parseInt(argumento[0]), parseInt(argumento[1]), argumento[2]);
        console.log(result);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

execute();
