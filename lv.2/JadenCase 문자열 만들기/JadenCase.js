function solution(s) {
    s = s.toLowerCase();  // 소문자로 변환
    let s_list = s.split('')
    const regex = /\d+/;

    if (!regex.test(s_list[0])) {
        s_list[0] = s_list[0].toUpperCase();  // 첫번째 문자 정규식 테스트
    }
    for (i = 0; i < s_list.length; i++) {
        if (i !== s_list.length -1 && s_list[i] === " ") {  // 맨마지막 문자가 " "일 경우 대비 범위 조정
            s_list[i + 1] = s_list[i + 1].toUpperCase();
        } 
    }
    return s_list.join('')
}
