// case 1. 정렬 후 구하기



// 실패하는 티케이스가 무엇인지 모르겠음...;;

function solution(people, limit) {
    let boat = [];
    let count = 0;
    
    for (let person of people) {
        if (limit - person < 40) {
            count += 1;
        } else if (boat.length !== 0 && person + boat[boat.length - 1] <= limit) {
            count += 1;
            boat.pop();
        } else {
            boat.push(person);
        }
    }
    count += boat.length;
    return count;
}
    
