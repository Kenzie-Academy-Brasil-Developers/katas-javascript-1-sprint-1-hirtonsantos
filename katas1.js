function oneThroughTwenty() {
  const range = []
  for (let i = 1; i <= 20; i++) 
  range.push(i)
   return range
   
}
console.log(oneThroughTwenty())

//call function oneThroughTwenty

function evensToTwenty() {
  let range = []
  for (let i = 1; i <=20; i++) {  
  if ((i%2)==0) {
    range.push(i)
  }
} return range
}
console.log(evensToTwenty())


//call function evensToTwenty

function oddsToTwenty() {
  let range = []
  for (let i = 1; i <=20; i++) {  
  if ((i%2)!==0) {
    range.push(i)
}
  } return range
}
console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
  let range =[]
  for (let i = 1; i <=100; i++) {  
    if ((i%5)==0) {
    range.push(i)
}
} return range
}
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
    
}

//call function squareNumbers

function countingBackwards() {
  const range = []  
  for (let i = 20; i>=1; i--)
  range.push (i)
  return range
} 
console.log (countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
    let range = []
    for (let i = 20; i >=1; i--) {
    if ((i%2)==0) {
    range.push(i)
}
    } return range
  }
  console.log (evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let range = []
  for (let i = 20; i >=1; i--) {
  if ((i%2)!==0) {
  range.push(i)
}
  } return range
}
console.log (oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let range =[]
  for (let i = 100; i >=0; i--) {  
    if ((i%5)==0) {
    range.push(i)
}
} return range
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
