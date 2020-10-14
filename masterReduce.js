// za pomocą metody .reduce wbudowanej w array 
// odtwórz działanie innych metod:

// - array.some
// - array.every
// - array.filter
// - array.map

const testArray = [1, 2, 3, 4];

// Some
function _some(array, callback) {
    return array.reduce((accumulator, element) => {
        if (callback(element) || callback(accumulator)) {
            return true;
        };
        return false;
    });
};

// Every
function _every(array, callback) {
    return array.reduce((accumulator, element) => {
        if (!callback(element) || !callback(accumulator)) {
            return false;
        };
        return true;
    });
};

// Filter
function _filter(array, callback) {
    return array.reduce((accumulator, element) => {
        if (callback(element)) {
            accumulator.push(element);
        };
        return accumulator;
    }, []);
};

// Map
function _map(array, callback) {
    return array.reduce((accumulator, element) => {
        return [...accumulator, callback(element)]
    }, []);
};

console.log('testArray: ', testArray);
console.log('_some output: ', _some(testArray, a => a > 4));
console.log('_every output: ', _every(testArray, a => a < 7));
console.log('_filter output: ', _filter(testArray, a => a >= 2));
console.log('_map output: ', _map(testArray, a => a * 2));