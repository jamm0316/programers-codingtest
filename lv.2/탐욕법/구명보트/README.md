## 문제접근법
1. 사람들(데이터)를 오름차순으로 정렬한다.
2. 양쪽 끝에서 두 수를 비교하며 접근한다.
3. 보트는 매 roof마다 출발한다.(heavy alone, light + heavy, light alone)
  - 무거운 사람과 가벼운 사람이 limit 이하인지 검증
    - limit 이하라면, 가벼운 사람을 태운다. (가벼운 사람은 무거운 사람과 몸무게가 맞아야 출발한다.)
  - 무거운 사람은 무조건 태운다. (무거운 사람은 무조건 출발한다)
    - 여기서, 출발의 의미는 인덱스를 하나씩 건너 띄우는 것
  - 보트를 출발시킨다.
    - 여기서, 출발의 의미는 보트 수 세기
---
## pseudo code
1. sort((a, b)) => a-b
2. 가벼운 사람과 무거운 사람의 인덱스(포인터)를 설정한다
    - let light = 0  // pointer of light person
    - let heavy = people.length - 1  // pointer of heavy person
3. 출발한 보트 갯수 초기화
    - let boat = 0
5. 보트는 무조건 출발하며, 테스트 roof를 만든다.
    - 테스트 : 가벼운 사람과 무거운 사람이 탔을 때 limit가 넘는가?
      - 안넘으면 가벼운 사람을 태운다 (인덱스 ++)
      - while (light <= heavy) {
            if (person[light] + person[heavy] <= limit) {
                light++
    - 위 테스트를 통과 못해도 무거운 사람은 태운다.
      - heavy--
    - 현재 보트에 타고있는 사람들을 보낸다.
      - boat++
