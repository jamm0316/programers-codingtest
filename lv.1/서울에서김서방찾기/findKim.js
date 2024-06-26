// case1.
function solution(seoul){
    for (i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return "김서방은 " + i +"에 있다"
        }
    }
}


//case2. 포맷팅 이용
function solution(seoul){
    for (i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            const index = i;
            return `김서방은 ${index}에 있다`;
        }
    }
}
