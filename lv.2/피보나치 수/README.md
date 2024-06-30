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
2. 런타임 에러 발생

### case 2. for 함수
1. magic number 상수로 정의
2. a = 0, b = 1, temp = 0으로 초기화
3. for (i = 2; i <= n; i++)
  - temp = (a + b) % magic
  - a = b, b = temp로 각각 바인딩
4. return temp로 나머지 반환
