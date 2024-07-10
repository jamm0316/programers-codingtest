## 풀이전략
1. result => [중첩 해시 테이블]()을 만들어 인덱스를 반환한다.
2. 모든 category의 합을 나타내는 해시테이블 작성
3. category에 따라 인덱스와 각각의 play횟수를 가진 해시테이블 작성

## 해시테이블 예시
hash_sumPlay = {
    cassic: 1300
    pop : 2500
    }
```javascript
hash_Songlist = {  
    cassic: [  
    { id: 0, plays: 500 },  
    { id: 2, plays: 150 }.  
    { id: 3, plays: 800 }  
    ]  
    pop : [  
    { id: 1, plays: 600 },  
    { id: 4, plays: 2500}  
    ]}  
```
## pseudo code
#### step 1. 해시 테이블 만들기
  - 장르별 플레이 타임의 합 테이블(해시 테이블)
  - 장르별 id와 플레이 횟수 테이블(중첩 해시 테이블)

#### setp 2. 각 해시 테이블 정렬 -> sort

#### step 3. result 배열 초기화 후 정렬된 해시 테이블 중 최대 2개만 순서대로 result에 push
