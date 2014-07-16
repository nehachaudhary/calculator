function ButtonPanelModel (options){
    this.initialize(options);
}

ButtonPanelModel.prototype.initialize = function (options){
    // create button data in separate file and pass that data in options

    this.attributes = {
          'numbers' : {
              'row1' : [0, 1, 2],
              'row2' : [3, 4, 5],
              'row3' : [6, 7, 8],
              'row4' : [9, '.']
          },
        'operators' : ['/','*','+','-'],
        'special'   : ['ans','clear']
        }
};