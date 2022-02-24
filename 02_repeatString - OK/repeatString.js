const repeatString = function(string,number) {
if(number<0){
    return("ERROR")}
    else{
        let i=0
        let newstring=""
        while(i<(number)){
        newstring=newstring.concat(string)
        i++
        }
        return(newstring)
        }
};

// Do not edit below this line
module.exports = repeatString;
