function solution(x) {
    const x_string = x.toString();
    const x_list = x_string.split('');
    let sum = 0;

    for (i of x_list) {
        sum += parseInt(i);
    }
    if (x % sum === 0) {
        return true;
    } else {
        return false;
    }
}
