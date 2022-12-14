export default function newId(arr) {
    let val = undefined
    if (arr.length === 0) {
        val = 0
    }
    else {
        val = Number(arr[arr.length - 1].id) + 1
    }
    return (val + '').padStart(6, '0')
}