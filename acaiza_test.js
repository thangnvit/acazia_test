function makeValue(index, arr) {
    return (arr[index - 1] | 0) + (arr[index] | 0) + (arr[index + 1] | 0)
}

function acaizaTest(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        result.push(makeValue(i, input))
    }

    return result
}


const input = [4, 0, 1, -2, 3]
console.log('result', acaizaTest(input))
