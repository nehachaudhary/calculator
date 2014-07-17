function ButtonPanelModel (options){
    this.initialize(options);
}

ButtonPanelModel.prototype.initialize = function (options){
    // create button data in separate file and pass that data in options

    this.attributes = {
        'numbers' : {
            'row1' : [0, 1, 2, 3],      // decide it in CSS
            'row2' : [4, 5 , 6, 7],
            'row3' : [8, 9, '.']
        },
        'operators' : ['/','*','+','-'],
        'special' : ['ans', 'clear', 'back']
    }
};