### pseudocode
1. array 내림차순 정렬, sort b-a
2. count = 0 초기화
3. height를 array를 순회하면서 비교
4. if height < array[i] count += 1

### 오류
```
function solution(array, height) {    
    // init count
    let count = 0
    
    // loop array
    for (i = 0; i <= array.length; i++) {
        if (height < array[i]) {
            count += 1
        }
    } return count
}
```
return 구문이 for 루프 안에서 끝나고 있어서 전체적인 count를 셀 수 없었음.
for 바깥에서 끝나야 전체 카운트 가능
