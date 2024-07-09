## 풀이전략
1. 모든 경우의 수 구하는 법
    - 모든 카테고리 갯수 + 1   // 아무것도 안 입은 경우 포함하기위해
      - 왜 아무것도 안입은 경우를 포함하는가?
        카테고리의 종류 : hat, sunglasses, belt 의 경우 belt를 안하는 경우도 있기 때문 (다른 카테고리도 동일)
    - 전체 경우의 수 *= (모든 카테고리 갯수 + 1) - 1
      - 왜 - 1 을 하는가?  
        아무것도 안입은 경우는 없기 때문에
2. 카테고리 해시 테이블을 만든다.
3. 해시 테이블에서 카테고리 별 아이템 갯수를 구한다.
4. 모든 경우의 수를 구한다.

## pseudo code
### case 1. hash_Map 만들기(Map, forEach)
1. hash_Map을 생성한다
# 2. 여기 수정


### case 2. hash_table 만들기 (for, if)
1. hash_table 초기화
2. category list 초기화
3. for 구문을 통해 각 clothes의 [1] 요소에 접근하여 category를 추출한다.
    - 추출한 category가 hash_table에 있으면 += 1
    - 없으면 hash_table[category] = 1 로 정의해준다.
    - 이 때, category만 확인 할 수 있게 category 리스트에 push 한다.
4. category list를 이용하여 hash_table의 각 category의 값에 접근한다.
    - 모든 경우의 수를 초기화 한다(allCases = 1)
    - key(category)에 상응하는 value(갯수)를 추출하고 +1을 더한뒤 모두 곱한다.
5. allCases - 1 을 반환한다
