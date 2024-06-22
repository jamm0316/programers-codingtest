### pseudo code
1. 모든 문자를 소문자로 바꾼다.
2. 문자열을 split('')하여 리스트 형태로 바꾼다(순회하기 위해)
3. countP, countY를 초기화한다.
4. 문자열을 순회하며 p일경우 countP += 1, y일 경우 countY += 1
5. 만약 countP !== countY {return false}
6. 위 경우가 아니라면(같거나 없다면) {return true}
