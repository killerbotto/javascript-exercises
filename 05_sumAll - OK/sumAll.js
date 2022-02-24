const sumAll = function(numA,numB) {
    if(numA<0||numB<0||typeof numA!="number"||typeof numB !="number"){
        return "ERROR"
    }
    else{
        let sum=0
    if(numA>numB){
        let i=numB
        while(i<=numA){
            sum=sum+i
            i++
        }
    }else{
        let i=numA
        while(i<=numB){
            sum=sum+i
            i++
        }
    }
    return sum
}
};

// Do not edit below this line
module.exports = sumAll;
