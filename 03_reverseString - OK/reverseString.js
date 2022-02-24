const reverseString = function(string) {
let i=string.length-1;
let newstring=""
const stringarray=string.split("")
while(i>=0){
    newstring=newstring.concat(stringarray[i])
    i--
}
return(newstring)
};

// Do not edit below this line
module.exports = reverseString;
