function solution(array) {
    array.sort((a,b) => a - b);
    const number = parseInt(array.length / 2);
    let result = number;
    return array[result];
}
