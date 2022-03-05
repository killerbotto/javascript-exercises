const palindromes = function (a) {
    let c=a.toLowerCase()
    let b=Array.from(c)
    let w=b.filter(function(e){
        if(e===" "||e==="!"||e===","||e==="."){
            return false
        }else{return true}
    })
    let y=Array.from(c)
    let z=y.filter(function(e){
        if(e===" "||e==="!"||e===","||e==="."){
            return false
        }else{return true}
    })
    
    z.reverse()
    
    let correct =0

    let wrong=0

    for (var i = 0; i < w.length; ++i) {
        if (w[i] !== z[i]){ wrong++
      }else{
      correct++;
    }}
    if(wrong>0){return false}else{return true}
};

// Do not edit below this line
module.exports = palindromes;
