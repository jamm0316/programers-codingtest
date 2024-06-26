function solution(s) {
    let stackBox = [];

    for (i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stackBox.push(s[i]);
        } else {
            if (stackBox.length !==0) {
                stackBox.pop();
           } else {
               return false
           }
    }
    }
    if (stackBox.length === 0) {
        return true
    } else {
        return false
    }
}
