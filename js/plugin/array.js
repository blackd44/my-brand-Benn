
export function findIndex(keyarr = [], array) {
    let out = -1
    array.forEach((el, index) => {
        if (el[keyarr[0]] == keyarr[1]) {
            out = index
        }
    });
    return out
}

export function find(attr, value, array) {
    for (let i of array) {
        if (i[attr] === value) {
            return i
        }
    }
    return null
}