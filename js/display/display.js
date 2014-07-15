'use strict';

function Display(){
}

Display.prototype.initialize = function (options){
    var displayElement = options.displayElement;
    this.displayBand = createElement('input');
    this.displayBand.setAttribute('readonly','readonly');   // should come in its model
    this.displayBand.setAttribute('value',0);   // should come in its model
    displayElement.appendChild(this.displayBand);
};

Display.prototype.setNumbers = function(number) {
    var value = this.displayBand.value;
    if (value !== undefined) {
        value += expression;
    } else {
        value = expression;
    }
};

Display.prototype.setExpression = function (expression) {
    var value = this.displayBand.value;
    if (value !== undefined) {
        value += " " + expression;
    } else {
        value = expression;
    }
};

Display.prototype.setAnswer = function (answer) {
    this.displayBand.value = answer;
};

Display.prototype.getExpression = function () {
    return this.displayBand.value;
};
