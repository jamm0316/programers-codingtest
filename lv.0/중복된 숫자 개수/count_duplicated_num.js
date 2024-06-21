function solution(array, n) {
    // init result
    let result = 0
    
    // 순환하며 조건 대입
    for (i=0; i <= array.length; i++) {
        if (array[i] === n) {
            result += 1
        }
    }
    return result;
}
