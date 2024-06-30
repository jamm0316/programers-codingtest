## pseudo code
### case 1. 재귀함수
1. magic_number 상수로 지정
2. 재귀 함수 정의
  - 인자 3개 설정(i, j, count)
  - if count === n일 때, i % magic 리턴
  - else recursive(j, i+j, count + 1) 재귀호출
3. 재귀함수 초기화
  - return recusive(0, 1, 0)
#### 오류
1. 큰 수 대입 시 stack overflow 발생
