function solution(N) {
    let usedBattery = 0
    
    while (N !== 0) {
        if (N % 2 === 0) {  //짝수일 때
            N /= 2
        } else {  // 홀수일 때
            N -= 1
            usedBattery += 1
        }
    }
    return usedBattery
}
