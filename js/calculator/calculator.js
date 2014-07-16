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
    var displayPanelContainer = createElement('div',displayContainerClass);
    calculatorContainer.appendChild(displayPanelContainer);

    this.displayPanel = new DisplayPanel();
    this.displayPanel.initialize({
        displayPanelElement : displayPanelContainer
    });

    var buttonPanelContainerClass = 'js-numpad';
    var buttonPanelContainer = createElement('div', buttonPanelContainerClass);
    calculatorContainer.appendChild(buttonPanelContainer);

    this.buttonPanel = new ButtonPanel();
    this.buttonPanel.initialize({
        buttonPanelElement : buttonPanelContainer
    });
    
    this.addEventListener();
};

Calculator.prototype.addEventListener = function(){
    // write custom events
	this.buttonPanel.addEventListeners('click',this.displayInput, this);
	this.buttonPanel.addCalculateEventListener('click', this.calculate, this);
	this.buttonPanel.addClearEventListener('click', this.resetCalculator, this);
};

Calculator.prototype.displayInput = function(event){
	var currentNum = event.currentTarget.innerText;
	if(isFinite(currentNum) || currentNum === '.'){
		this.displayPanel.setNumbers(currentNum);
	}else{
		this.displayPanel.setValue(event.currentTarget.innerText);
	}
};


Calculator.prototype.calculate = function () {
    var operatorPrecedenceArray = ['/', '*', '+', '-'];
    var expressionString = this.displayPanel.getExpression();
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
    
    var evaluatedValue = isFinite(expression[0]) ? parseFloat(expression[0]) : 'Error !';
    
    this.displayPanel.setAnswer(evaluatedValue);
};

Calculator.prototype.resetCalculator = function(){
	this.displayPanel.resetDisplayPanel();
}
