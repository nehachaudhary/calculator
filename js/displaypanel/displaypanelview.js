'use strict';

function DisplayPanelView(options){
    this.initialize(options);
}

DisplayPanelView.prototype.initialize = function (options) {
    this.options = options;
    this.$el = options.el;
    this.render();
};

DisplayPanelView.prototype.render = function () {
    this.defaultDisplayValue = this.options.displayPanelModel['attributes']['defaultValue'];
    this.displayPanelBand = createElement('input','js-display-band',this.defaultDisplayValue);
    this.$el.appendChild(this.displayPanelBand);
};

DisplayPanelView.prototype.setValue = function (value) {
    this.displayPanelBand.value = value;
};

DisplayPanelView.prototype.getExpression = function () {
    return this.displayPanelBand.value;
};