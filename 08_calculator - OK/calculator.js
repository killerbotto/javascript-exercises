const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
  let sum=0
	a.forEach(e => {
    return sum=sum+e
  });
  return sum
};

const multiply = function(a) {
  let b=Array.from(a)
  let i=b.length
  let w=0
  let i2=1
  let mult=1
  while(i2<=i){
    mult=mult*b[w]
    i2++
    w++
  }
  return mult
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let i=1
  let w=1
  let fact=1
  while(i<=a){
    fact=fact*w
    w++
    i++
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
