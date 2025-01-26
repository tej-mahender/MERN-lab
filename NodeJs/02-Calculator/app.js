const calc = require('./calci'); // Import the calculator module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask user for input and perform calculation
function askUser() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
            rl.question('Choose operation (+, -, *, /): ', (operation) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;

                switch (operation) {
                    case '+':
                        result = calc.add(a, b);
                        break;
                    case '-':
                        result = calc.subtract(a, b);
                        break;
                    case '*':
                        result = calc.multiply(a, b);
                        break;
                    case '/':
                        result = calc.divide(a, b);
                        break;
                    default:
                        console.log('Invalid operation. Please choose +, -, *, or /.');
                        rl.close();
                        return;
                }

                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

// Run the calculator
askUser();
