### pseudo code
1. stack box 만들기
2. for 문자열 s 순회
  - "(" 라면 stack box에 "(" 추가
  - ")" 라면 stack box에서 pop
    -> 여기서 stack box가 비어있다면 false
3. if stack box.length === 0 라면 return true
   else return false
