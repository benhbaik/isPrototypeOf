function isPrototypeOf(prototypeObject, object) {
    var protoOfObject;;

    if (typeof prototypeObject === 'undefined' ||  prototypeObject === null) {
        throw new TypeError('Cannot read property "isPrototypeOf" of undefined');
    }

    if (typeof object === 'undefined' || object === null) {
        return false;
    }

    if (typeof object === ('string' || 'boolean' || 'number')) {
        return false;
    }

    protoOfObject = Object.getPrototypeOf(object);

    if (prototypeObject === protoOfObject) {
        return true;
    }

    if (prototypeObject !== protoOfObject) {
        return isPrototypeOf(prototypeObject, protoOfObject);
    }

    return false;
}
