import Cookie from './Cookie'
import Date from './Date'

const lib = {
    name: 'lib',
    getBrowser() {
        return '浏览器'
    },
    getOs() {
        return '系统'
    }
}

export default {
    ...lib,
    Cookie,
    Date
}
