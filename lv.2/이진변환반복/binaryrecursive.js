//case 1. recursive function

function solution(s, countRun, countZero) {
    let split0 = s.split("0").join('');
    countZero += (s.length - split0.length);
    let binary = split0.length.toString(2);
    countRun += 1;
    if (binary !== "1") {
        return solution(binary, countRun, countZero);
    } else {
        return [countRun, countZero]
    }
}


//case 2. while
function solution (s) {
    let countRun = 0
    let countZero = 0
    
    while (s !== "1") {
        let splitZero = s.split('0').join('')
        
        let currentZero = s.length - splitZero.length
        countZero += currentZero
        
        let binaryLength = splitZero.length
        s = binaryLength.toString(2)
        countRun++
    }
    return [countRun, countZero]
}
