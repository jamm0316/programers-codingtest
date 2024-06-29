### pseudo code
1. count 초기화
2. for 함수를 이용해 n만큼 순회
    - 이 때, start 변수를 정의하여, 시작 숫자를 정해줌
    - cumsum 변수 초기화
      - for 함수 안에서 초기화하는 이유 : start 변수가 바뀔 때 마다 cumsum을 초기화 하기 위해
    - i = start로 바인딩하기
      - i로 따로 바인딩 하는 이유 : start에 영향을 끼치지 않고 while함수 내에서 사용하기 위해
  3. while함수 이용하여 cumsum의 값이 n 미만이 될 때 까지 cumsum에 1씩 누적하여 숫자를 더함
  4. if함수를 이용해 cumsum === n 인지 테스트
    - true라면 count++
