import fs from "fs";
var answer=0;

fs.readFile('./input.txt', "utf8", (err, data) => {
    if (err) throw err;
    const lines= data.trim().split(/\r?\n/);
    lines.forEach(line => {
        var digits=[];
        for(let i=0;i<line.length;i++){
            if(!isNaN(line[i])){
                digits.push(line[i]);
            }
        }
        console.log(digits);
        var lineDigits= digits.length > 0 ? digits[0] + digits[digits.length - 1] : '';
        if (lineDigits) {
            answer += Number(lineDigits);
          }
    });
    console.log("answer is "+ answer);
  });