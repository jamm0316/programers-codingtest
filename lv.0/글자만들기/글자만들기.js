function solution(my_string, indices) {
    let char_array = my_string.split('');
    
    indices.sort((a, b) => b - a);
    
    for (let index of indices) {
        char_array.splice(index, 1);
    }
    return char_array.join('');
}

const my_string = "apporoograpemmemprs"
const indices = [1, 16, 6, 15, 0, 10, 11, 3]
console.log(solution(my_string, indices))
