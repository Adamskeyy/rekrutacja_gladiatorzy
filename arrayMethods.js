// Treść zadania #6 - metody wbudowane w Array
// z uwagi na to, że JS jest jezykiem funkcyjnym warto opanować jego podstawowe metody

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

const testArray = [5, 545, 4, 3];

function mapFn(array, callback) {
    const mapped = [];
    for (let i = 0; i < array.length; i++) {
        mapped.push(callback(array[i]));
    };
    return mapped;
};

function filterFn(array, callback) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) filtered.push(array[i]);
    };
    return filtered;
};

function reduceFn(array, callback, initial) {
    let reduced;
    if (initial) {
        reduced = initial;
    } else {
        reduced = null;
    };
    for (let i = 0; i < array.length; i++) {
        reduced = callback(reduced, array[i]);
    };
    return reduced;
};

function reduceRightFn(array, callback, initial) {
    let reduced;
    let reversedArr = [...array].reverse();
    if (initial) {
        reduced = initial;
    } else {
        reduced = null;
    };
    for (let i = 0; i < reversedArr.length; i++) {
        reduced = callback(reduced, reversedArr[i]);
    };
    return reduced;
};

function everyFn(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        };
    };
    return true;
};

function someFn(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        };
    };
    return false;
};

function entriesFn(array) {
    const entries = [];
    for (let i = 0; i < array.length; i++) {
        entries.push([i, array[i]]);
    };
    return entries;
};

console.log('testArray: ', testArray);
console.log('mapFn output: ', mapFn(testArray, x => 2 * x));
console.log('filterFn output: ', filterFn(testArray, x => 5 > x));
console.log('reduceFn output: ', reduceFn(testArray, (a, b) => a - b, 10));
console.log('reduceRightFn output: ', reduceRightFn(testArray, (a, b) => a - b));
console.log('everyFn output: ', everyFn(testArray, x => x === 545));
console.log('someFn output: ', someFn(testArray, x => x === 4));
console.log('entriesFn output: ', entriesFn(testArray));
console.log(testArray);