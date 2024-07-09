//case 1. hash table - 1
function solution (clothes)
    const hashTable = {};

    


// case 2. hash table - 2
function solution(clothes) {
    const hash_table = {};
    let category = []
    // construct hash_table
    for (let i = 0; i < clothes.length; i++) {
        if (clothes[i][1] in hash_table) {
            hash_table[clothes[i][1]] += 1
        } else {
            hash_table[clothes[i][1]] = 1
            category.push(clothes[i][1])
        }
    }
    
    // check all cases
    let allCases = 1
    for (let tag of category) {
        allCases *= (hash_table[tag] + 1)  // add case of nothing(+1)
    }
    
    
    if (category.length === 1) {
        return clothes.length
    } else {
        return allCases - 1  // subtract all nothing
        }
}
