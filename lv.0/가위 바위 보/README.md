### pseudo code
0. 문자열을 slpit()하여, list형태로 바꾼다.
1. 결과값을 초기화 한다.
2. 각각에 상응하는 dict을 만든다
3. for으로 rsp을 순환한다
  a. 순환하면서 리스트의 각 요소를 찾는다.
  b. 위에서 찾는 요소가 dict의 key와 매칭될 때 value를 반환하게 한다.
  c. 반환된 value를 추가한다.
4. 결과값 반환
Q. 문자열도 빈 문자열에 바로 [push](https://github.com/jamm0316/programers-codingtest/wiki/push())가 가능한가?
   - 불가하다. 이유는 문자열은 불변객체(immutable Object)이기 때문.
   - 그러나, 새로운 주소 할당으로 결합이 가능하다.
