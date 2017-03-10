function isPrototypeOf(prototypeObject, object) {
    if (prototypeObject === undefined || null) {
        throw new TypeError('Cannot read property "isPrototypeOf" of undefined');
    }

    if (object == undefined || null) {
        return false;
    }

    if (prototypeObject === Object.prototype) {
        return true;
    }

    if (prototypeObject === Object.getPrototypeOf(object)) {
        return true;
    }

    return false;
}
