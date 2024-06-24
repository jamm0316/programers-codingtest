function solution(n) {
    const n_string = n.toString();
    let n_list = n_string.split('');
    n_list = n_list.reverse();

    return n_list.map(number => parseInt(number));
}
