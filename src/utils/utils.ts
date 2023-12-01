export const deepClone = <T>(data: T): T => {
    if (!data) return data
    let res: any;
    if (typeof data != 'object' && data !== null) {
        res = data
        return res
    } else {
        if (data instanceof Array) {
            res = []
            data.forEach((item: any, index: number) => {
                if (typeof item != 'object' && item !== null) {
                    res[index] = item
                } else {
                    res[index] = deepClone(item)
                }
            })
        } else if (data instanceof Object) {
            res = {}
            for (let key in data) {
                if (data[key] instanceof Object || data[key] instanceof Array) {
                    res[key] = deepClone(data[key])
                } else {
                    res[key] = data[key]
                }
            }
        }
    }
    return res
}
