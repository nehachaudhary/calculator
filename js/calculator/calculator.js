'use strict';

function Calculator() {}

Calculator.prototype.initialize = function(options){
    var calculatorContainer = document.getElementsByClassName(options.calculatorContainerClass)[0];
    // initialize calculator module
    this.initializeChildren({
        parentContainer : calculatorContainer
    });
};

Calculator.prototype.initializeChildren = function (options) {
    // initialize child modules : Display and Numpad
    var calculatorContainer = options.parentContainer;

    var displayContainerClass = 'js-display';
    var displayContainer = createElement('div',displayContainerClass);
    calculatorContainer.appendChild(displayContainer);

    this.display = new Display();
    this.display.initialize({
        displayElement : displayContainer
    });

    var numberPadContainerClass = 'js-numpad';
    var numberPadContainer = createElement('div', numberPadContainerClass);
    calculatorContainer.appendChild(numberPadContainer);

    this.numberPad = new NumberPad();
    this.numberPad.initialize({
        numberPadElement : numberPadContainer
    });

};


Calculator.prototype.calculate = function () {
    var operatorPrecedenceArray = ['/', '*', '+', '-'];
    var expressionString = this.display.getExpression();
    var expression = expressionString.split(' ');

    var i = 0;
    while (i <= operatorPrecedenceArray.length) {
        for (var index = 0 ; index <= expression.length; ++index){
            var operator = operatorPrecedenceArray[i];
            var operatorIndex = expression.indexOf(operator);
            if(operatorIndex !== -1){
               var num1 = parseFloat(expression[operatorIndex-1], 10);
               var num2 = parseFloat(expression[operatorIndex+1], 10);
               var ans = evaluateExpression(num1, expression[operatorIndex], num2);
               var isSingleOccurrence = operatorIndex === expression.lastIndexOf(operator);
               expression.splice(operatorIndex - 1, 3, ans);
               console.log(expression);
               if (isSingleOccurrence) {
                   ++i;
                   break;
               }
            }else{
                ++i;
                break;
            }
        }
    }
    var evaluatedValue = isFinite(expression[0]) ? expression[0] : 'Error !';
    this.display.setAnswer(evaluatedValue);
};



