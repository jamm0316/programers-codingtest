## pseudo code
### case 1. time complexity O(n^2) -> split, while
1. s를 배열 형태로 만든다. (O(n))
2. 순회하며 s[i] 와 s[i+1]을 비교한다. (O(n))
  - s[i]=s[i+1]이면 replace("")
  - 같지 않다면 retunr 0
3. if s = [] return 1
  - 비어있지 않다면 return 0

**For this reason, time complexity = O(n^2)**

---

### case 2. time complexity O(n)
1. stack box를 만들어 놓는다.
2. s를 char단위로 순회한다. (O(n))
  - stack box가 비어있지 않고, char와 stack box의 제일 마지막 char가 같으면 해당 글자 pop
  - 그 외, char를 stack box에 push
3. stack box.length === 0 이면 1, 아니면 0 반환

**For this reason, time complexity = O(n)**
