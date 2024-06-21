### pseudocode

1. 배열 정렬하기 오름차순, 내림차순 상관 없음
```
array.sort((a,b) => a - b)
```

3. 배열 길이를 반으로 나눈 후 정수 반환
```
number = parseInt(array.length / 2)
// 기댓값 : 배열의 길이 / 2 - 1
```

3. 배열에서 정수 인덱스를 찾아 반환
   (인덱스는 0부터 시작하므로 "배열의 길이/2 - 1"은 중간값을 가리킴 )
```
return array[number]
```

