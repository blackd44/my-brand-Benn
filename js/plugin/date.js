export const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}
export const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}

export function format(str = '') {
    str += ''

    // for months

    let MM = str.indexOf('MM')
    if (MM !== -1) {
        str = str.split('')
        str.splice(MM, 2, months[this.getMonth()]).join('')
        str = str.join('')
    }

    let mmm = str.indexOf('mmm')
    if (mmm !== -1) {
        str = str.split('')
        str.splice(mmm, 3, months[this.getMonth()].substring(0, 3)).join('')
        str = str.join('')
    }

    let mm = str.indexOf('mm')
    if (mm !== -1) {
        str = str.split('')
        str.splice(mm, 2, this.getMonth()).join('')
        str = str.join('')
    }


    // for years

    let yyyy = str.indexOf('yyyy')
    if (yyyy !== -1) {
        str = str.split('')
        str.splice(yyyy, 4, this.getFullYear()).join('')
        str = str.join('')
    }

    let yy = str.indexOf('yy')
    if (yy !== -1) {
        str = str.split('')
        let year = (this.getFullYear() + '').split('')
        str.splice(yy, 2, year.splice(year.length - 2, 2).join('')).join('')
        str = str.join('')
    }


    // for date

    let dd = str.indexOf('dd')
    if (dd !== -1) {
        str = str.split('')
        str.splice(dd, 2, (this.getDate() + '').padStart(2, '0')).join('')
        str = str.join('')
    }


    // for day

    let DDD = str.indexOf('DDD')
    if (DDD !== -1) {
        str = str.split('')
        str.splice(DDD, 3, days[this.getDay()]).join('')
        str = str.join('')
    }

    let DD = str.indexOf('DD')
    if (DD !== -1) {
        str = str.split('')
        str.splice(DD, 2, days[this.getDay()].substring(0, 3)).join('')
        str = str.join('')
    }

    return str
}

Date.prototype.format = format

export default Date