//case 1. hash table - 1 used Map, forEach
function solution (clothes)
    const hashTable = new Map;

    clothes.forEach(([name, kind]) => {
        if (hashTable.has(kind)) {
            hashTable.set(kind, hashTable.get(kind) + 1);
        } else {
            hashTable.set(kind, 1);
        }
    });

    let allCombination = 1
    hashTable.forEach((count, kind) => {
        allCombination *= (count + 1);
    });

    return allCombination - 1;
            

// case 2. hash table - 2 used for, if
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
    
    return allCases - 1  // subtract all nothing
}
