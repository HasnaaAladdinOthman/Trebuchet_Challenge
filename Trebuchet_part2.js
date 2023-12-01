import fs from "fs";
var answer=0;
var lineNumber=0;
const digitsMapping = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  };

//Create a regular expression pattern
const pattern = new RegExp(Object.keys(digitsMapping).join('|'), 'gi');

fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) throw err;
    const lines= data.trim().split(/\r?\n/);
    lines.forEach(line => {
        lineNumber++;
        var digits=[];
        //traverse through the line to look for any numbers
        for (let i = 0; i < line.length; i++) {
            let currentNumber = '';
            if(!isNaN(line[i])){
                digits.push(line[i]);
                continue;
            }
            
            for (let j = i; j < line.length; j++) {
              currentNumber += line[j];
              
              if (digitsMapping.hasOwnProperty(currentNumber)) {
                digits.push(digitsMapping[currentNumber]);
              }
            }
          }

        var lineDigits= digits.length > 0 ? digits[0] + digits[digits.length - 1] : '';
        if (lineDigits) {
            answer += Number(lineDigits);
        }
        
    });
    console.log("answer is "+ answer);
});