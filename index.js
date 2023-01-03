var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push(name);
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
    kittens.pop();
}

function destructivelyRemoveFirstKitten() {
    kittens.shift();
}

function appendKitten(name) {
    return [...kittens, name];
}

function prependKitten(name) {
    return [name, ...kittens];
}

function removeLastKitten() {
    const newArr = [...kittens];
    newArr.pop();
    return newArr;
}

function removeFirstKitten() {
    const newArr = [...kittens];
    newArr.shift();
    return newArr;
}
