> [!tip]
> 해시 테이블로 구현된 파이썬의 자료형 => 딕셔너리

## 1. 주요 개념
#### a. 해시 함수 (Hash function)
  - key : value 를 갖는 함수, 좋은 해시 함수는 가능한 균등하게 key에 대한 value를 갖는다.
#### b. 버킷 (Bucket)
  - 해시 함수에 의해 매핑된 배열의 각 위치, 실제 데이터가 저장된 장소 ([매핑되다](https://namu.wiki/w/%EB%A7%A4%ED%95%91#s-2) : key와 value를 연결짓다)
#### c. 충돌 (Collision)
  - 서로 다른 두 키가 함수에 의해 동일한 버킷에 매핑될 때 발생하는 상황.

## 2. 충돌 해결 방법
#### a. 체이닝 (Chaining)
  - 해시테이블 구조의 원형, 각 버킷에 연결리스트를 만들어 충돌이 발생하면, 해당항목에 여러 항목을 저장
  - 새로운 값은 연결리스트 끝에 추가
#### b. 오픈 어드레싱 (Open Addressing)
  - 충돌이 발생하면 새로운 버킷을 찾기 위해 해시테이블 내에서 순회
    - 선형 탐사 (Linear Probing) : 충돌이 발생한 버킷의 다음 버킷부터 빈 버킷 탐색
      - 클러스터링 (Clustering) 발생 : 인근데이터와 합쳐지는 현상
    - 이차 탐사 (Quadratic Probing) : 선형 탐사 대신, 탐사 간격을 제곱수로 증가
    - 이중 해싱 (Double Hashing) : 두번째 해시함수를 이용하여 충돌 시 이동할 위치 결정

## 3. 시간 복잡도
#### a. 탐색 (Search)
  - 평균적으로 O(1), 최악의 경우 O(n) (모든키가 충돌하여 하나의 버킷에 저장될 때)
#### b. 삽입 (Insert)
  - 평균적으로 O(1), 최악의 경우 O(n)
#### c. 삭제 (Delete)
  - 평균적으로 O(1), 최악의 경우 O(n)

## 4. 적용예시
1. [포켓몬](https://github.com/jamm0316/programers-codingtest/blob/main/lv.1/%ED%95%B4%EC%8B%9C/pokemon.js) : 서로 중복되지 않게, 가장 많은 포켓몬 고르기
2. [완주하지 못한 선수](https://github.com/jamm0316/programers-codingtest/blob/main/lv.2/%ED%95%B4%EC%8B%9C/%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80%EB%AA%BB%ED%95%9C%EC%84%A0%EC%88%98/nogoalParticipant.js) : 해시테이블에서 값 더하고 빼기
