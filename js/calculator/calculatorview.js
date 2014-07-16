function CalculatorView(options) {
    this.initialize(options)
}

CalculatorView.prototype.initialize = function (options){
    this.options = options;
    this.$el = document.getElementsByClassName(this.options.el)[0];
    this.render();
};

// create divisions for display panel and button panel
CalculatorView.prototype.render = function () {

    var displayPanelContainerClass = this.options.displayPanelClass
    var displayPanelContainer = createElement('div',displayPanelContainerClass);
    this.$el.appendChild(displayPanelContainer);

    var buttonPanelContainerClass = this.options.buttonPanelClass;
    var buttonPanelContainer = createElement('div', buttonPanelContainerClass);
    this.$el.appendChild(buttonPanelContainer);

};
