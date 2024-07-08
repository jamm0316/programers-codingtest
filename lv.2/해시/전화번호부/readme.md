## 풀이전략
1. hash table에 전화번호를 넣어둔다
2. 접두사를 추출하여 hash table에 있는지 확인하여 true, false를 가린다.

## pseudo code
1. hash table에 전화번호 부 상의 모든 전화번호를 넣는다.
2. 전화번호 부의 전화번호 별로 검사한다
    - 전화번호의 digit를 추가하며 접두사를 만든다.
    - 접두사가 hash table에 존재하고, number가 아닌 수가 있다면 false 반환
3. 위 test를 통과했다면 true 반환
