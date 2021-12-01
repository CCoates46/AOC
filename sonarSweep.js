const fs = require("fs");


const text = fs.readFileSync("./myfileofnumbers.txt", "utf-8");
const textByLine = text.split("\n").map((i) => Number(i))

const countIncrease = function () {
    let count = 0;
    for (let i = 0; i < textByLine.length; i++) {
        if (textByLine[i] < textByLine[i + 1]) {
            count++;
        } 
    }
    console.log(count);
}

const countThreeMeasurements = function () {
    let count3 = 0;
    for (let i = 0; i < textByLine.length; i++) {
        let current = textByLine[i] + textByLine[i+1] + textByLine[i+2];
        let next = textByLine[i+1] + textByLine[i+2] + textByLine[i+3];
        if (current < next) {
            count3++;
        }
    }
    console.log(count3);
}
countIncrease();
countThreeMeasurements();