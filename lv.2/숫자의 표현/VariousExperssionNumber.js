function solution(n) {
    let count = 0;
    
    for (let start = 1; start <= n; start++) {
        let sum = 0;
        let i = start;
        
        while (sum < n) {
            sum += i;
            i++;
        }
        if (sum === n) {
            count++;
        }
    }
    return count;
}
