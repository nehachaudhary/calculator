function CalculatorController() {
}
CalculatorController.prototype.initialize = function (options) {

    this.calculatorView = new CalculatorView({
                         el : options.calculatorContainerClass,
        'displayPanelClass' : 'js-display-panel',
        'buttonPanelClass'  : 'js-button-panel'
    });

    this.initializePanels();
    this.addEventListener();
};

CalculatorController.prototype.initializePanels = function() {
    this.displayPanel = new DisplayPanel();
    this.displayPanel.initialize({
        el: document.getElementsByClassName('js-display-panel')[0]
    });

    this.buttonPanel = new ButtonPanelController();
    this.buttonPanel.initialize({
        el: document.getElementsByClassName('js-button-panel')[0]
    });
};

CalculatorController.prototype.addEventListener = function(){
    this.buttonPanel.addEventListener('numbersOperatorsClicked', this.setValue, this);
    this.buttonPanel.addEventListener('answerKeyClicked', this.calculate, this);
    this.buttonPanel.addEventListener('clearKeyClicked', this.resetDisplay, this);
};

CalculatorController.prototype.resetDisplay= function () {
	this.value = undefined;
	this.displayPanel.setValue(0);
};

CalculatorController.prototype.calculate= function () {
	if(this.value){
		var dataToEvaluate = this.value;
		var operatorPrecedenceArray = ['/', '*', '+', '-'];
		var expression = dataToEvaluate.split(' ');
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
		this.value = undefined;
		this.evaluatedValue = isFinite(expression[0]) ? parseFloat(expression[0]) : 'Error !';
		this.displayPanel.setValue(this.evaluatedValue);
	}else{
		this.displayPanel.setValue(this.evaluatedValue);
	}
};


CalculatorController.prototype.setValue = function (event) {
    var keyClickedValue = event.currentTarget.innerText;
    if(!this.value){
        this.value = keyClickedValue;
    }else{
        if(isFinite(keyClickedValue)){
            if (this.value === '0') {
                this.value = keyClickedValue;
            } else if (this.value === 'Error !') {
                this.value = keyClickedValue;
            }/* else if (this.displayPanelBand.getAttribute('data-isAnswer')) {
             this.displayPanelBand.removeAttribute('data-isAnswer');
             this.value = keyClickedValue;
             }*/ else {
                this.value += keyClickedValue;
            }
        }else{
            if (keyClickedValue !== undefined && keyClickedValue !== '.') {
            	// write again..considering no opperator should come after opperator except -
            	if(keyClickedValue === '-' && this.value.lastIndexOf(' ') !== -1 && this.value.lastIndexOf(' ') === this.value.length-1){
            		this.value += keyClickedValue;
            	}else{
            		this.value += " " + keyClickedValue + " ";
            	}
            } else {
                this.value += keyClickedValue;
            }
        }
    }
    this.displayPanel.setValue(this.value);
};