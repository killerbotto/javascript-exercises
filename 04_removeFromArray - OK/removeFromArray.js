const removeFromArray = function(...x) {
        const array = x[0]
        let newarray=[]
        array.forEach((item)=>{
            if(!x.includes(item)){
                newarray.push(item)
            }
        })
        return newarray
};

// Do not edit below this line
module.exports = removeFromArray;
