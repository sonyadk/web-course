(function(){

    const square = function (){ 
      return this * this; 
    };
    ::bind().square();
}.bind(5))();