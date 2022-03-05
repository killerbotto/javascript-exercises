const findTheOldest = function(a) {
    const oldest = a.sort(function (a,b){
        if(a.yearOfDeath===undefined||a.yearOfDeath==null){
            a.yearOfDeath=Date(2022)
        }else{if(b.yearOfDeath===undefined||b.yearOfDeath==null){
            b.yearOfDeath=Date(2022)
        }}
        const lastGuy=a.yearOfDeath-a.yearOfBirth
        const nextGuy=b.yearOfDeath-b.yearOfBirth
        if(lastGuy>nextGuy){
            return -1
        }else{
            return 1
        }
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
