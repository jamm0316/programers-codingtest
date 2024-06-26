function solution(absolutes, sings) {
    let result = 0
    for (i = 0; i < sings.length; i++) {
        if (sings[i] === true) {
            result += parseInt(absolutes[i])
        } else {
            result += parseInt(absolutes[i]) * -1
        }
    }
    return result
}
