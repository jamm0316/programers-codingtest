// case1. Math.
function solution(s) {
  const s_arr = s.split(' ');
  return Math.min(...s_arr) + ' ' + Math.max(...s_arr);
}

// case2. Ascending
function solution(s) {
    // 배열 초기화
    let return_arr = [];
    const s_arr = s.split(' ');

    // 배열 오름차순
    s_arr.sort((a,b) => a - b);

    // 최소값, 최대값 추출 및 배열에 추가
    let lower = s_arr.shift()
    let higher = s_arr.pop()
    return_arr. push(lower, " ", higher)

    return return_arr.join('')
}
