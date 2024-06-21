function solution(array) {
    array.sort((a,b) => a - b);
    const number = parseInt(array.length / 2);
    return array[number];
}
