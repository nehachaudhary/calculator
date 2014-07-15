'use strict';

function NumberPad(){
}

NumberPad.prototype.initialize = function (options) {
    var numberPadElement = options.numberPadElement;

    for (var index = 0 ; index <=9 ; index++) {
        var element = createElement('span', 'js-number', index);
        numberPadElement.appendChild(element);
    }

    element = createElement('span', 'js-number', '.');
    numberPadElement.appendChild(element);

    element = createElement('span', 'js-number', '+');
    numberPadElement.appendChild(element);

    element = createElement('span', 'js-number', '-');
    numberPadElement.appendChild(element);

    element = createElement('span', 'js-number', '*');
    numberPadElement.appendChild(element);

    element = createElement('span', 'js-number', '/');
    numberPadElement.appendChild(element);
};
