## 풀이전략
1. hash table에 전화번호를 넣어둔다
2. 접두사를 추출하여 hash table에 있는지 확인하여 true, false를 가린다.

## pseudo code
1. hash table에 전화번호 부 상의 모든 전화번호를 넣는다.
2. 전화번호 부의 전화번호 별로 검사한다
    - 전화번호의 digit를 추가하며 접두사를 만든다.
    - 접두사가 hash table에 존재하고, number가 아닌 수가 있다면 false 반환
3. 위 test를 통과했다면 true 반환

## 주의사항
> [!warning]
> [삼항조건연산자]()(return condition ? if true : else)를 쓰지 않는 이유  
> fuction은 return값이 반환되면 실행을 종료하므로, 위 같은 경우 for 구문 전체를 순회하지 못하고 함수가 종료된다. 
