var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);

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
