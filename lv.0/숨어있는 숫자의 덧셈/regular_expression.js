function solution(my_string) {
    const to_list = my_string.split('');
    const regex = /\d/;
    let result = 0;
    
    for (i of to_list) {
        if (regex.test(i)) {
            result += parseInt(i);
        }
    }
    return result;
}
