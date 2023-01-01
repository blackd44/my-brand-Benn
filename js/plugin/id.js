export default function newId(arr) {
    let val = undefined
    let sorted = [...arr].sort((a, b) => Number(b.id) - Number(a.id))
    if (arr.length === 0) {
        val = 0
    }
    else {
        val = Number(sorted[0].id) + 1
    }
    return (val + '').padStart(6, '0')
}