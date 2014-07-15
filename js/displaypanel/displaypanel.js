'use strict';

function DisplayPanel(){
}

DisplayPanel.prototype.initialize = function (options){
    var displayPanelElement = options.displayPanelElement;
    this.displayPanelBand = createElement('input');
    this.displayPanelBand.setAttribute('readonly','readonly');   // should come in its model
    this.displayPanelBand.setAttribute('value',0);   // should come in its model
    displayPanelElement.appendChild(this.displayPanelBand);
};

DisplayPanel.prototype.setNumbers = function(number) {
    var value = this.displayPanelBand.value;
    
    if (value === '0') {
        value = number;
    } else {
        value += number;
    }
    
    this.displayPanelBand.value = value;
};

DisplayPanel.prototype.setExpression = function (expression) {
    var value = this.displayPanelBand.value;
    if (value !== undefined) {
        value += " " + expression + " ";
    } else {
        value = expression;
    }
    
    this.displayPanelBand.value = value;
};

DisplayPanel.prototype.setAnswer = function (answer) {
    this.displayPanelBand.value = answer;
};

DisplayPanel.prototype.getExpression = function () {
    return this.displayPanelBand.value;
};

DisplayPanel.prototype.resteDisplayPanel = function(){
	this.displayPanelBand.value = 0;
}
