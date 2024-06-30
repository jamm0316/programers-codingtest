function solution(n) {
    let magic = 1234567;

    function recursive(i, j, count) {
        if (count === n) {
            return i % magic;
        } else {
            return recursive(j, i + j, count + 1);
        }
    }

    return recursive(0, 1, 0);
}
