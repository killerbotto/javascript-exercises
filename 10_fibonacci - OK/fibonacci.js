const fibonacci = function(a) {
    let i=2
    let num=1
    let ult=1
    let pen=0

    if(a<0){return "OOPS"}
    else{
    while(i<=a){
        num=ult+pen
        pen=ult
        ult=num
        i++
    }
    return num}

};

// Do not edit below this line
module.exports = fibonacci;
