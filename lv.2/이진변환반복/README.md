### pseudo code
재귀함수 이용(recursive function)
1. 이진수를 돌아다니며 0을 찾아 제거한다 => split
2. 제거한 값의 길이를 구하여 countZero에 바인딩 => a - b
3. 숫자를 이진수로 바꾼 후 countRun에 바인딩 => toString(2)
4. if 문자열이 1이 아니라면, 1~3 반복
5. 1이라면 지운 0의 갯수, 이진변환 횟수 반환

### 특이사항
1. 외부함수와 내부함수
  - 외부함수
    - function solution (s, countRun, countZero) {}를 사용할 때, 인자값을 초기화해주지 않으면 undefinded값을 반환한다.
    - 기본값을 지정해주지 않으면, 변수가 누적되지 않고 매번 새로운 호출에서 'undefinded'를 반환한다.
    - 함수 내부에서 초기화 한다면, 재귀함수가 불러와 질 때마다 초기화 되므로 아래와 같이 초기화 한다.
    - function solution (s, countRun = 0, countZero = 0) {}
  - 내부함수
    - function solution (s) {funtion solution (s, countRun, countZero) {}} 함수 사용 시, 인자값을 초기화 해줄 필요 없음.
    - 
