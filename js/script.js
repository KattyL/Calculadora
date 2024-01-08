class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
        this.btnPress = this.btnPress.bind(this); // Garante que o método tenha a referência correta ao objeto Calculator
    }

    checkLastDigit(input, upperValue, reg) {
        if (
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        ) {
            return true;
        } else {
            return false;
        }
    }

    btnPress(event) {
        let input = event.target.textContent;
        let upperValue = this.upperValue.textContent;

        var reg = new RegExp('^\\d+$');

        if (this.checkLastDigit(input, upperValue, reg)) {
            return false;
        }

        if (upperValue === "0") {
            this.upperValue.textContent = input;
        } else {
            this.upperValue.textContent += input;
        }
    }
}

let calc = new Calculator();

let buttons = document.querySelectorAll('.btn'); 

for (let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', calc.btnPress);
}
