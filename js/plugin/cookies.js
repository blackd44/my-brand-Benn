export default class Cookies {
    static set(name, value, days) {
        let final = new Date()
        final.setDate(final.getDate() + days)
        let expires = "expires=" + final.toUTCString()
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }

    static getAll() {
        return document.cookie
    }

    static remove(name) {
        this.set(name, null, null)
    }

    static get(name) {
        let cookies = decodeURIComponent(document.cookie)
        let all = cookies.split('; ')
        let result = null

        all.forEach(c => {
            if (c.indexOf(name) == 0)
                result = c.substring(name.length + 1)
        })

        return result
    }
}