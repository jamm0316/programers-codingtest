// Number.isInteger() 함수 이용
function solution(n) {
    let squareRoot = Math.sqrt(n)
    
    if (Number.isInteger(squareRoot)) {
        return (squareRoot + 1) ** 2
    } else {
        return -1
    }
}


//squreRoot === parseInt(squreRoot) 로 판별하기
function solution(n) {
    let squareRoot = Math.sqrt(n)
    
    if (squareRoot === parseInt(squareRoot)) {
        return (squareRoot + 1) ** 2
    } else {
        return -1
    }
}
