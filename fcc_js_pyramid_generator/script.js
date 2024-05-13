
const character = "*";
const count = 8;
const rows = [];

let continueLoop = false;
let done = 0;

let result="";

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount-rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount-rowNumber);
}

for (let i = 1; i <= count; i ++) {
  rows.push(padRow(i, count));

}

for (const row of rows) {
  result = result + "\n" + row;
}



console.log(result);



function pyramid(){
  const character = "#";
  const count = 8;
  const rows = [];
  let result="";

  for(let i=0;i<count;i++){
    rows.push(character.repeat(i+1));
  
  }

  for (const row of rows) {
    result+=row+"\n";
    
  }
  
  return result;
}

let pyr=pyramid()


