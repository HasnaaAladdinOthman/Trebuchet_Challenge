import fs from "fs";
var answer=0;
const digitsMapping = {
    'zero': 'z0o',
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e'
  };

//Create a regular expression pattern
const pattern = new RegExp(Object.keys(digitsMapping).join('|'), 'gi');

fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) throw err;
    const lines= data.trim().split(/\r?\n/);
    lines.forEach(line => {
        //replacing the spelledout letters with digits using the digitsMapping object
        line = line.replace(pattern, (match) => digitsMapping[match]);
        line = line.replace(pattern, (match) => digitsMapping[match]);
        var digits=[];
        //traverse through the line to find digits
        for(let i=0;i<line.length;i++){
            if(!isNaN(line[i])){
                digits.push(line[i]);
            }
        }
        var lineDigits= digits.length > 0 ? digits[0] + digits[digits.length - 1] : '';
        if (lineDigits) {
            answer += Number(lineDigits);
          }
    });
    console.log("answer is "+ answer);
});
