function solution(rsp) {
    let result = '';
    const must_win_dict = { 2 : 0, 5 : 2, 0 : 5};
    rsp.split('');
    
    for (i of rsp) {
        result += must_win_dict[i]
    }
    return result;
}
