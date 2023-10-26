function isEmptyObject(obj) {
    for (let key of obj) {
        return false;
    }
    return true;
}

module.exports = isEmptyObject;
