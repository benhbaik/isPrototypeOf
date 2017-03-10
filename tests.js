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

tests({
    'It should return true if object exists in prototypeObject.': function() {
        var result = isPrototypeOf(dog, myDog);
        eq(result, true);
    },
    'It should return false if object does not exist in prototypeObject.': function() {
        var result = isPrototypeOf(myDog, dog);
        eq(result, false);
    },
    'It should throw a TypeError if prototypeObject is undefined or null.': function () {
        var result;
        try {
            isPrototypeOf(undefined, myDog);
        } catch (e) {
            result = (e instanceof TypeError);
        }
        eq(result, true);
    },
    'It should return false if object is undefined or null.': function() {
        var nullObject = null;
        var undefinedObject = undefined;

        var nullResult = isPrototypeOf(dog, nullObject);
        var undefinedResult = isPrototypeOf(dog, undefinedObject);

        eq(nullResult, false);
        eq(undefinedResult, false);
    },
    'It should work with Object.prototype being passed in as prototypeObject.': function() {
        var result = isPrototypeOf(Object.prototype, dog);
        eq(result, true);
    },
    'It should work for any number of prototype links': function() {
        var result = isPrototypeOf(canine, dog);
        var resultTwo = isPrototypeOf(dog, myDog);
        eq(result, true);
        eq(resultTwo, true);
    }
});
