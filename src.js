'use strict'

var fs = require("fs");
var text = fs.readFileSync("./input.txt");
var textByLine = text.split("\n")

console.log(textByLine);


/* Take first input value as the start, if the next figure in the file is greater than previous then count, if less then ignore it

1. Get first value then loop over the different values in the file
2. Check to see if next value is higher
3. If > then count and log increased
4. If < then ignore and log decreased

*/

