## 풀이전략
  - 해시 테이블을 매핑하여 데이터를 찾기 편하게 만든다.
  - 모든 participant에 count를 매핑하고, 2번 이상 등장한 사람은 +1씩 해준다
  - 해시 테이블에서 completion에 해당되는 사람들은 count -1
  - participant 중 이름이 남은 사람(person === 1)의 이름을 반환한다.

## pseudo code
  - 해시 테이블을 초기화한다
    - hashTable = {}
  - 해시 테이블을 매핑한다.
    - for (let person of participant)
    - if (hashTable[person]) {hashTable[person] += 1}
    - else {hashTable[person] = 1}
  - 해시 테이블에서 completion 제거
    - for (let person of completion)
    - if (hashTable[person]) {hashTable[person] -= 1}
  - 해시 테이블에서 person : 1 인 값 찾아 반환
