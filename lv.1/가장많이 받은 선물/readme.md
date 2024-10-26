page link : https://school.programmers.co.kr/learn/courses/30/lessons/258712

---

# 💡 풀이전략

- 각 인원의 수는 정해져있고 중복되지 않음 → 고정배열을 통해 인덱스로 구분.
- 구현: 2차원 배열로 선물을 주고 받은 table 구현
- 완전탐색: 테이블 전체를 탐색하며, 조건 분석
- 반환값: 다음달 선물을 최대로 받는 인원의 **선물 개수 출력**
</aside>

## 🎨 사용된 알고리즘

> [!tip]
> 구현, 완전탐색

---

# code

## Java

```java
import java.util.Arrays;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        //1. 변수 초기화
        int[][] table = new int[friends.length][friends.length];  //선물내역 테이블
        int[] score = new int[friends.length];  //선물지수 테이블
        int maxNum = 0; //최종 반환 변수

        //1. 테이블 작성
        for (String gift : gifts) {
            String[] query = gift.split(" ");
            for (int i = 0; i < friends.length; i++) {
                for(int j = 0; j < friends.length; j++) {
                    if (friends[i].equals(query[0]) && friends[j].equals(query[1])) {
                        table[i][j]++;
                        score[i]++;
                        score[j]--;
                    }
                }
            }
        }

        //2. 테이블 조건탐색
        for (int i = 0; i < table.length; i++) {
            int count = 0;
            for (int j = 0; j < table[i].length; j++) {
                if (i == j) {
                    continue;
                } else if (table[i][j] > table[j][i]) {
                    count++;
                } else if (table[i][j] == table[j][i] && score[i] > score[j]) {
                    count++;
                }
            }
            maxNum = Math.max(count, maxNum);
        }

        //4. 결과 반환
        return maxNum;
    }
}
```

## 해결한 오류

### 1. 문제 파악 부족

- 문제점
    
    <aside>
    💡
    
    1. **선물지수 테이블 작성**
        1. **선물지수**는 조건 탐색을 위한 참조 테이블로 사용될 뿐이며, 그 결과가 기대하는 반환값이 아님.
    2. **결과값 계산 조건 추가**
        1. 선물 내역 테이블이 선물지수 테이블을 참조하여, 결과값을 계산해야함.
    </aside>
    
- 해결방안
    1. 선물지수 테이블 작성
        - 선물지수 테이블(score)를 만들고, 선물내역 테이블(table) 작성 시 score을 함께 작성한다.
        - 작성 조건: 선물 준 사람 +1, 선물 받은 사람 -1
    2. 결과값 계산 방안
        - `friends.length` 만큼 순회하며, 인원이 바뀔 때 마다 `count`를 0으로 초기화.
        - `table[i][j] > table[j][i]` 조건문을 통해, `i`와 `j`의 선물 내역을 비교하여, 크다면 `count++`
        - 같다면 선물지수 비교 조건을 추가하여, `score[i] > score[j]` 조건을 통과하면 `count++`
        - 최종 반환된 `count`를 `Math.max(count, maxNum)` 를 통해 비교하여, 더 큰 값을 `maxNum`으로 저장 후 `maxNum` 반환

---

- 기존코드
    
    ```python
    import java.util.Arrays;
    
    class Solution {
        public int solution(String[] friends, String[] gifts) {
            int[][] factor = new int[friends.length][2];  //문제파악 미흡
            int maxNum = 0;
            
            for (String gift : gifts) {
                String[] connection = gift.split(" ");
                for (int i = 0; i < friends.length; i++) {
                    if (friends[i].equals(connection[0])) {
                        factor[i][0] += 1;
                    }
                    if (friends[i].equals(connection[1])) {
                        factor[i][0] -= 1;  //불필요
                    }
                }
            }
            for (int[] arr : factor) {
                int result = arr[0] + arr[1];
                maxNum = Math.max(result, maxNum);  //문제파악 미흡
            }
            
            return maxNum;
        }
    }
    ```
    

---

[▲ top](https://www.notion.so/lv01-12bcda6b86ff80778e87dce740606385?pvs=21)

[< back](https://www.notion.so/25239624ade64d8c86a9398a8d33a409?pvs=21)
