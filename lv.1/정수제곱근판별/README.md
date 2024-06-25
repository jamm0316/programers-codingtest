### pseudo code
1. Math.sqrt() 함수를 이용해 제곱근을 구한다.
2. 제곱근이 정수인지 아닌지 판별한다.
   - if (Number.isInteger(squreRoot )) -> 여기서 Number.isInteger()은 정수라면 true반환
   - if (squreRoot === parseInt(squareRoot)) -> 정수라면 두 인자가 같음
3. 리턴값 반환
   - 정수일 경우 : 제곱 반환
   - 아닐 경우 : -1 반환
