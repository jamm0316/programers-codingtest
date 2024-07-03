// case 1. 올림 규칙 이용하기
function solution(N, A, B) {
  let round = 0

  while (A !== B) {
    A = Math.ceil(A / 2)
    B = Math.ceil(B / 2)
    round++
  }
  return round
}


// case 2. 연속된 수 이면서, 큰수가 짝수 일때 규칙 이용하기
function solution(N, A, B) {
    let round = 1;
    let array = [A, B];
    let final = Math.log(N) / Math.log(2)
    array = array.sort((a,b) => a - b);
    
    while (round <= final) {
        if (Math.abs(array[0] - array[1]) === 1 && array[1] % 2 === 0) {
            return round
        } else {
            round += 1
            for (let i = 0; i <= 1; i++) {
                if (array[i] % 2 === 0) {
                    array[i] = (array[i] / 2)
                } else {
                    array[i] = ((array[i] + 1) / 2)
                }
            }
        }
    }
}
