const character = "#";
const count = 8;
const rows = [];

for(let i=0;i<count;i++){
  rows.push(character);

}

console.log(rows)

let result="";

for (const row of rows) {
  result+=row+"\n";
  
}

console.log(result);