function solution(arr) {
    let sum_elements = 0
    
    for (i of arr) {
        sum_elements += i
    }
    return sum_elements / arr.length
}
