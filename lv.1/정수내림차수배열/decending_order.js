function solution(n) {
    const n_string = n.toString();
    let n_list = n_string.split('');
    let reversed_list = n_list.sort((a,b) => b - a);
    reversed_list = reversed_list.join('');
    
    return parseInt(reversed_list)
}
