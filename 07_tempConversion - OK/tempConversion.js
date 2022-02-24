const ftoc = function(ctemp) {
  let x=(ctemp-32)*5/9
  // let x=(ctemp*9/5)+32
return Math.round(x*10)/10

};

const ctof = function(ftemp) {
  let y=(ftemp*9/5)+32
  // let y=(ftemp-32)*5/9
return Math.round(y*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
