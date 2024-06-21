function solution (start_num, end_num) {
    // init list
    let num_list = [];
    for (let i = end_num; i < start_num, i++) {
        num_list.push(i)};
    num_list.sort((a, b) => b - a);
    return num_list;
}
