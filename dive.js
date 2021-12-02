const fs = require("fs");


const instructions = fs.readFileSync("./diveInstructions.txt", "utf-8");
const textByLine1 = (instructions.split('\n'))
//console.log(textByLine1);

//Part1
const commands = function () {
    let horizontal = 0;
    let depth = 0; 
    for (let i = 0; i < textByLine1.length; i++) {
        const nums = textByLine1[i].replace(/[^0-9]/g, '');
        const numsOnly = parseInt(nums);
        if (textByLine1[i].includes('forward')) {
            horizontal+= numsOnly
        } else if (textByLine1[i].includes('up')) {
            depth -= numsOnly
        } else if (textByLine1[i].includes('down')) {
            depth += numsOnly
        }
    }
        const finalPosition = horizontal * depth
        console.log(horizontal, depth);
        console.log(finalPosition);
    }
    commands()

    //Part 2
    const commandAim = function () {
        let horizontal = 0;
        let depth = 0;
        let aim = 0;
        for (let i = 0; i < textByLine1.length; i++) {
            const nums = textByLine1[i].replace(/[^0-9]/g, '')
            const numsOnly = parseInt(nums);
            if (textByLine1[i].includes('up')) {
                aim -= numsOnly
            } else if (textByLine1[i].includes('down')) {
                aim += numsOnly
            } else if (textByLine1[i].includes('forward')) {
                horizontal+= numsOnly
                depth += (aim * numsOnly)
            } 
        } 
        const newFinalPosition = horizontal * depth
        console.log(depth, horizontal)
        console.log(newFinalPosition)
    }
commandAim();

