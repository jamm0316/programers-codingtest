//case 1. less code
function solution(nums) {
    const pokemon = [...new Set(nums)].length;
    const selectable = nums.length / 2;
    
    return selectable < pokemon ? selectable : pokemon
}


//case 2. more code
function solution(nums) {
    let pokemon = Array.from(new Set(nums)).length;
    let selectable = nums.length / 2
    
    if (selectable <= pokemon) {
        return selectable
    } else {
        return pokemon
    }
}
