// case 1. 정렬 후 양끝에서 접근
function solution(people, limit) {
    let count = 0
    people.sort((a, b) => a - b);
    
    let light = 0;  // index of most light
    let heavy = people.length - 1;  // index of most heavy
    let boat = 0;  // number of boat
    
    while (light <= heavy) {  
        if (people[light] + people[heavy] <= limit) {  // check on a boat together
            light++  // carring light person
        }
        heavy--  // carring heavy person
        boat++  // go boat
    }
    return boat
}


// case 2. stack으로 비교하며 접근
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
    
