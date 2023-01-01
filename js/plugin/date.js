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
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

export function format(str = '') {
    str += ''

    // for months

    str = str.replaceAll('MM', months[this.getMonth()])
    str = str.replaceAll('mmm', months[this.getMonth()].substring(0, 3))
    str = str.replaceAll('mm', this.getMonth())

    // for years

    let year = (this.getFullYear() + '')
    str = str.replaceAll('yyyy', year)
    str = str.replaceAll('yy', year.split('').splice(year.length - 2, 2).join(''))

    // for date

    str = str.replaceAll('dd', (this.getDate() + '').padStart(2, '0'))

    // for day

    str = str.replaceAll('DDD', days[this.getDay()].substring(0, 3))
    str = str.replaceAll('DD', days[this.getDay()])
    return str
}

Date.prototype.format = format

export default Date