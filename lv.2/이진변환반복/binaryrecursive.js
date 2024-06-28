function solution(s, countRun, countZero) {
    let split0 = s.split("0").join('');
    countZero += (s.length - split0.length);
    let binary = split0.length.toString(2);
    countRun += 1;
    if (binary !== "1") {
        return solution(binary, countRun, countZero);
    } else {
        return [countRun, countZero]
    }
}
