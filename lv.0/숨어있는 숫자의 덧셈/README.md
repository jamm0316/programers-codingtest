### pseudo code
1. 문자열 -> 리스트로 변환
2. result 초기화
3. 정규식 중 test 사용
   a. const regex = /0-9/
   b. for (i of lsit) {
     if = regex.test(list)  {
     result += parseInt(i)
     **convert parseInt()**
       -> str -> list 일 때 숫자는 문자열로 인식되지만, 정규표현식에서는 숫자로 인식되어 걸러진다.
       -> 따라서, parseInt()없이 +=를 할 경우 숫자가 나열되며, parseInt()로 정수로 바꿔주면, 덧셈이 된다.
  }
4. return result
