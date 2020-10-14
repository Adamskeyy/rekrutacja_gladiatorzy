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
    let i;
    if (initial) {
        reduced = initial;
        i = 0;
    } else {
        reduced = array[0];
        i = 1;
    };
    for (i; i < array.length; i++) {
        reduced = callback(reduced, array[i]);
    };
    return reduced;
};

function reduceRightFn(array, callback, initial) {
    let reduced;
    let i;
    const reversedArray = [...array].reverse();
    if (initial) {
        reduced = initial;
        i = 0;
    } else {
        reduced = reversedArray[0];
        i = 1;
    };
    for (i; i < reversedArray.length; i++) {
        reduced = callback(reduced, reversedArray[i]);
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