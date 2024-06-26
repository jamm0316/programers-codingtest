function solution(a,b) {
    let index = [a, b];
    index.sort((a, b) => a - b);  //index 오름차순 정렬
    let result = 0

    for (i = index[0]; i <= index[1]; i++) {
        result += i
    }
    return result
}
