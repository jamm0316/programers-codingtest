function solution(N) {
    const str_N = N.toString();
    const list_n = str_N.split('');
    let result = 0;
    
    for (let i of list_n) {
        result += parseInt(i);
    }
    return result;
}
