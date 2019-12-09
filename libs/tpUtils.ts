class TpUtils {
    // 修复JS浮点的加减乘除运算 Fadd加 Fsub减 Fmul乘 Fdiv除
    Fadd(a: number, b: number): number {
        let c: number
        let d: number
        let e: number = 0
        try {
            c = a.toString().split('.')[1].length
        } catch (err) {
            c = 0
        }
        try {
            d = b.toString().split('.')[1].length
        } catch (err) {
            d = 0
        }
        e = 10 ** Math.max(c, d)
        return (this.Fmul(a, e) + this.Fmul(b, e)) / e
    }

    // Fsub减
    Fsub(a: number, b: number): number {
        let c: number
        let d: number
        let e: number = 0
        try {
            c = a.toString().split('.')[1].length
        } catch (err) {
            c = 0
        }
        try {
            d = b.toString().split('.')[1].length
        } catch (err) {
            d = 0
        }
        e = 10 ** Math.max(c, d)
        return (this.Fmul(a, e) - this.Fmul(b, e)) / e
    }

    // Fmul乘
    Fmul(a: number, b: number): number {
        let c: number = 0
        const d: string = a.toString()
        const e: string = b.toString()
        try {
            c += d.split('.')[1].length
        } catch (err) {}
        try {
            c += e.split('.')[1].length
        } catch (err) {}

        a = Number(d.replace('.', ''))
        b = Number(e.replace('.', ''))
        return (a * b) / 10 ** c
    }

    // Fdiv除
    Fdiv(a: number, b: number): number {
        let c: number = 0
        let d: number = 0
        let e: number = 0
        let f: number = 0
        try {
            e = a.toString().split('.')[1].length
        } catch (err) {
            e = 0
        }
        try {
            f = b.toString().split('.')[1].length
        } catch (err) {
            f = 0
        }

        c = Number(a.toString().replace('.', ''))
        d = Number(b.toString().replace('.', ''))
        return this.Fmul(c / d, 10 ** this.Fsub(e, f))
    }

    /**
     * 将数值截取后2位小数,格式化成金额形式
     *
     * @param num 金额
     * @param digits 保留小数位
     * @return 金额格式的字符串,如'1,234,567.45'
     */
    formatCurrency(num: number, digits: number = 2): string {
        if (isNaN(num)) {
            return '--'
        }
        digits = digits <= 0 ? 0 : digits

        const sign: string = num === Math.abs(num) ? '' : '-'
        num = Math.abs(num)
        num = Math.round(this.Fmul(num, 10 ** digits))
        const cents: number = num % 100
        let centsToStr
        if (cents < 10) {
            centsToStr = '0' + cents
        }
        let numToStr: string = Math.round(num / 100).toString()
        for (let i = 0; i < Math.floor((numToStr.length - (1 + i)) / 3); i++) {
            numToStr =
                numToStr.substring(0, numToStr.length - (4 * i + 3)) +
                ',' +
                numToStr.substring(numToStr.length - (4 * i + 3))
        }
        return `${sign}${numToStr}.${centsToStr}`
    }
}

export default TpUtils
