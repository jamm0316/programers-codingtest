//case 1-a. recursive function (used 1 funtion)
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


//case 1-b. recursive function (used 2 function)
function solution (s) {
    function recursive(s, countRun, countZero) {
        let splitZero = s.split('0').join('');
        
        let currentCount = s.length - splitZero.length;
        countZero += currentCount;
        
        let binary = splitZero.length.toString(2);
        countRun++
        if (binary !== "1") {
            return recursive(binary, countRun, countZero);
        } else {
            return [countRun, countZero];
        }
    }
    return recursive(s, 0, 0);
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
