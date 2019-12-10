interface Regexp {
    phone: RegExp // 手机号
    email: RegExp // 邮箱
}

interface lengthParams {
    maxLength: number // 最大长度
    minLength: number // 最小长度
    checkedmsg: string // 被校验内容
}

class Validata {
    regexp: Regexp

    constructor() {
        this.regexp = {
            phone: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[35678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/,
            email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        }
    }
    // 非空校验
    isVoid(checkedmsg: string): boolean {
        return checkedmsg === ''
    }

    // 长度校验
    isCheckedLength({
        maxLength,
        minLength,
        checkedmsg
    }: lengthParams): boolean {
        const checkedmsgLength: number = checkedmsg.length
        return checkedmsgLength >= minLength && checkedmsgLength <= maxLength
    }

    // 各种规则校验
    isCheckedAllRules(checkedmsg: string, type: string): boolean {
        return this.regexp[type].test(checkedmsg)
    }
}

export default Validata
