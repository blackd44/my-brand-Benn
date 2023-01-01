function convertToBase(number, fromBase, toBase) {

    let decimalNumber = parseInt(number, fromBase)

    return decimalNumber.toString(toBase)
}

const IDBASE = 36
const INITBASE = 10
const IDLENGTH = 6
const IDCHAR = '0'

export default function newId(arr) {
    let val = undefined
    let sorted = [...arr].sort((a, b) => convertToBase(b.id, IDBASE, INITBASE) - convertToBase(a.id, IDBASE, INITBASE))
    if (arr.length === 0) {
        val = 0
    }
    else {
        val = convertToBase((convertToBase(sorted[0].id, IDBASE, INITBASE) + 1), INITBASE, IDBASE)
    }
    return (val + '').padStart(IDLENGTH, IDCHAR)
}