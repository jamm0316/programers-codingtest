// case 1. recursive function -> stack overflow
function solution(n) {
    let magic = 1234567;

    function recursive(i, j, count) {
        if (count === n) {
            return i % magic;
        } else {
            return recursive(j, i + j, count + 1);
        }
    }

    return recursive(0, 1, 0);
}


// case 2. for roof
function solution(n) {
    const magic = 1234567;  // 파보나치 수 나눌 값
    
    let a = 0;
    let b = 1;  // f(0), f(1) 초기화
    let temp = 0;  // 나머지 초기화

    for (let i = 2; i <= n; i++) {
        temp = (a + b) % magic;  // 각 단계마다 나머지 계산
        a = b;
        b = temp;
    }
 
    return temp;  // 나머지 반환
}


// case 3. used matrix -> 아직 이해 못함
function solution(n) {
    const MOD = 1234567;

    function multiplyMatrices(a, b) {
        return [
            [(a[0][0] * b[0][0] + a[0][1] * b[1][0]) % MOD, (a[0][0] * b[0][1] + a[0][1] * b[1][1]) % MOD],
            [(a[1][0] * b[0][0] + a[1][1] * b[1][0]) % MOD, (a[1][0] * b[0][1] + a[1][1] * b[1][1]) % MOD]
        ];
    }

    function matrixPower(matrix, power) {
        if (power === 1) {
            return matrix;
        }
        if (power % 2 === 0) {
            const halfPower = matrixPower(matrix, power / 2);
            return multiplyMatrices(halfPower, halfPower);
        } else {
            return multiplyMatrices(matrix, matrixPower(matrix, power - 1));
        }
    }

    if (n === 0) {
        return 0;
    }

    const baseMatrix = [
        [1, 1],
        [1, 0]
    ];

    const resultMatrix = matrixPower(baseMatrix, n);

    return resultMatrix[0][1];
}
