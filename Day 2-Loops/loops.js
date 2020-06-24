'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    let arr = s.split("");
    let i;
    for(i=0; i<arr.length; i++) {
    if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'o' || arr[i] == 'u' || arr[i] == 'i')
        console.log(arr[i]);
    }
    for(i=0; i<arr.length; i++) {
    if(arr[i] != 'a' && arr[i] != 'e' && arr[i] != 'o' && arr[i] != 'u' && arr[i] != 'i')
        console.log(arr[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}