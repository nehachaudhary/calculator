'use strict';

function ButtonPanel(){
}

ButtonPanel.prototype.initialize = function (options) {
    var buttonPanelElement = options.buttonPanelElement;
    createButtonPanelTemplate(buttonPanelElement);
};

ButtonPanel.prototype.addEventListeners = function(type, handler, context){
	function onClickHandler(e) {
		console.log(e);
		handler.call(context, e || window.event);
	}
	
	if(typeof type === 'string' && type ==='click'){
		var buttonNumberElements = document.getElementsByClassName('js-input');
		for(var index = 0; index < buttonNumberElements.length; ++index){
			buttonNumberElements[index].addEventListener('click', onClickHandler, false);		
		}
	}
};

ButtonPanel.prototype.addCalculateEventListener = function(type, handler, context){
	function onClickHandler(e) {
		console.log(e);
		handler.call(context, e || window.event);
	}
	
	if(typeof type === 'string' && type ==='click'){
		var answerElement = document.getElementsByClassName('js-calculate-answer')[0];
		answerElement.addEventListener('click', onClickHandler, false);		
	}
};

ButtonPanel.prototype.addClearEventListener = function(type, handler, context){
	function onClickHandler(e) {
		console.log(e);
		handler.call(context, e || window.event);
	}
	
	if(typeof type === 'string' && type ==='click'){
		var answerElement = document.getElementsByClassName('js-clear-display')[0];
		answerElement.addEventListener('click', onClickHandler, false);		
	}
};


function createButtonPanelTemplate(buttonPanelElement){
	for (var index = -1 ; index <9 ;) {
    	var div = createElement('div', 'js-number-container');
    	buttonPanelElement.appendChild(div);
        
    	var element = createElement('button', 'js-input', ++index);
        div.appendChild(element);
        
        if(index < 9){
        	var element = createElement('button', 'js-input', ++index);
        	div.appendChild(element);
        	
        	var element = createElement('button', 'js-input', ++index);
        	div.appendChild(element);
        }
    }

	
    element = createElement('button', 'js-input', '.');
    div.appendChild(element);
    
	var div = createElement('div', 'js-operator-container');
	buttonPanelElement.appendChild(div);

    element = createElement('button', 'js-input', '+');
    div.appendChild(element);

    element = createElement('button', 'js-input', '-');
    div.appendChild(element);

    element = createElement('button', 'js-input', '*');
    div.appendChild(element);

    element = createElement('button', 'js-input', '/');
    div.appendChild(element);
    
    var div = createElement('div', 'js-answer-container');
	buttonPanelElement.appendChild(div);
	
	element = createElement('button', 'js-calculate-answer', 'Ans');
	div.appendChild(element);
	
	element = createElement('button', 'js-clear-display', 'Clear');
	div.appendChild(element);
}



