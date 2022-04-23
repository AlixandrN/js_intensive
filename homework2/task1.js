// Task1

function makeObjectDeepCopy (obj) {
    let copyObj = {}
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] != 'object') {copyObj[prop] = obj[prop]}
            else {copyObj[prop] = makeObjectDeepCopy(obj[prop])}
        }
    }
    return copyObj
}
