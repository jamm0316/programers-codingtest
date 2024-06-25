function solution(x, n) {
    let num_list = [];
    
    for (let i = 1; i <= n; i++) {
        num_list.push(i * x)
    }
    return num_list
}
