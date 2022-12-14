
export function email(val) {
    let valid = /^(?<usename>[a-zA-Z0-9_.+-]+)@(?<domainname>[a-zA-Z0-9-]+)\.(?<extension>[a-zA-Z0-9-.]+)$/
    return val.match(valid)
}