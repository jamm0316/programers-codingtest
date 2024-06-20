// pseudocode
// 1. 문자열을 list형태로 바꿔주기 -> split
//* 2. indices의 순서를 뒤집어서 뒤에부터 제거
//   -> 그 이유는 뒤에부터 제거하면 앞에 인덱스에 영향을 받지 않기 때문
// 2. list를 index를 통해 순회하면서 해당 문자 제거 -> splice
// 3. 모두 제거된 리스트 합치기 -> join

function solution(my_string, indices) {
    let char_array = my_string.split('');
    
    indices.sort((a, b) => b - a);
    
    for (let index of indices) {
        char_array.splice(index, 1);
    }
    return char_array.join('');
}

const my_string = "apporoograpemmemprs"
const indices = [1, 16, 6, 15, 0, 10, 11, 3]
console.log(solution(my_string, indices))
