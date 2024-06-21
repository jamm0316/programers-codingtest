function solution(array, height) {    
    // init count
    let count = 0
    
    // loop array
    for (i = 0; i <= array.length; i++) {
        if (height < array[i]) {
            count += 1
        }
    }
    return count
}
