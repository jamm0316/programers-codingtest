function solution(n) {
    // init array
    odd_array = [];
    
    //loop contion stament
    for (i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            odd_array.push(i);
        }
    }
    return odd_array;
}
