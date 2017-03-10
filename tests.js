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
var empty = Object.create(null);
var james = {
  name: 'james sq.',
  age: 27
};
var james2 = Object.create(james);
james2.favTeam = 'clemson tigers';

var james3 = Object.create(james2);
james3.favColor = 'orange';

var randomObject = {};
var a = {};

tests({
    // '--- tiff\'s tests ---'
    'it should return `true` if prototypeObj is a prototype of callingObj': function() {
        eq(isPrototypeOf(dog, myDog), true);
        eq(isPrototypeOf(Object.prototype, myDog), true);
    },
    'it should return `false` if prototypeObj is not a prototype of callingObj': function() {
        eq(isPrototypeOf(Object.prototype, empty), false);
    },
    'it should throw a TypeError if prototypeObj is undefined or null': function() {
        try {
            isPrototypeOf(undefined, {});
        } catch (e) {
            eq(e instanceof TypeError, true);
        }
    },
    // '--- ivo\'s tests ---'
    'It should return true if the object in the first argument has the object in the second argument as its prototype.': function () {
        eq(isPrototypeOf(dog, myDog), true);
    },
    'It should return false if the object in the first argument doesn`t have the object in the second argument as its prototype.': function () {
        eq(isPrototypeOf(dog, empty), false);
    },
    'It should also return true if the prototype chain is indirect.': function () {
        eq(isPrototypeOf(Object.prototype, myDog), true);
    },
    'It should be able to compare the built-in Array.': function () {
        eq(isPrototypeOf(Array.prototype, []), true);
    },
    'It should throw a TypeError if the prototype argument is undefined or null.': function () {
        var errorWasThrown = false;
        try {
            isPrototypeOf(undefined, {});
        }
        catch (e) {
            errorWasThrown = true;
            eq(e instanceof TypeError, true);
        }
        eq(errorWasThrown, true);
    },
    // '--- monofysics\' tests ---'
    'Should return true if `prototypeObject` is a direct prototype of `targetObject`.' : function () {
        var b = Object.create(a);
        eq(isPrototypeOf(a, b), true);
    },
    'Should return true if `prototypeObject` exists down the prototype chain of `targetObject`.' : function () {
        var c = Object.create(a);
        eq(isPrototypeOf(Object.prototype, c), true);
    },
    'Should return false if `prototypeObject` does not exist in the prototype chain of `targetObject`.' : function () {
        var d = Object.create(null);
        eq(isPrototypeOf(d, a), false);
    },
    'Should throw a TypeError if `prototypeObject` is undefined.' : function () {
        var isTypeError = false;
        try {
            isPrototypeOf(undefined, a);
        } catch (e) {
            isTypeError = e instanceof TypeError;
        }
        eq(isTypeError, true);
    },
    'Should throw a TypeError if `prototypeObject` is null.' : function () {
        var isTypeError = false;
        try {
            isPrototypeOf(null, a);
        } catch (e) {
            isTypeError = e instanceof TypeError;
        }
        eq(isTypeError, true);
    },
    'Should return false if `targetObject` is undefined.' : function () {
        eq(isPrototypeOf(a, undefined), false);
    },
    'Should return false if `targetObject` is null.' : function () {
        eq(isPrototypeOf(a, null), false);
    },
    'Should return false if `prototypeObject` is not an object.' : function () {
        eq(isPrototypeOf('string', a), false);
    },
    'Should return false if `targetObject` is not an object.' : function () {
        eq(isPrototypeOf(a, 'string'), false);
    },
    // '--- james\' tests ---'
    'james object should be linked to Object.prototype': function() {
        var testOne = isPrototypeOf(Object.prototype, james);
        eq(testOne, true);
    },
    'james2 object should be linked to james object prototype': function() {
        var testTwo = isPrototypeOf(james, james2);
        eq(testTwo === james.isPrototypeOf(james2), true);
    },
    'randomObject should not be linked to james prototype': function() {
        var testThree = isPrototypeOf(james, randomObject);
        eq(testThree === false, true);
    },
    'empty object with NO prototype should NOT be linked to Object.prototype.': function() {
        var testFour = isPrototypeOf(Object.prototype, empty);
        eq(testFour === false, true);
    },
    // '--- nate\'s tests ---'
    'It should return true if prototypeObj is the prototype of object.': function() {
        var skater = {
            kickflip: function() {
            console.log("*Does a kickflip*");
            }
        };
        var tyler = Object.create(skater);
        var testResult = isPrototypeOf(skater, tyler);
        eq(testResult, true);
    },
    'It should return true if prototypeObj is anywhere on the prototype chain of object.': function() {
        var ninja = {
            backflip: function() {
                console.log("*Does a triple backflip*");
            }
        };
        var reptile = Object.create(ninja);
        var testResult = isPrototypeOf(Object.prototype, reptile);
        eq(testResult, true);
    },
    'It should return false if prototypeObj is not on the prototype chain of object.': function() {
        var vincent = {};
        var tony = {};
        var testResult = isPrototypeOf(vincent, tony);
        eq(testResult, false);
    },
    'It should return false if obj is null': function() {
        var dog = {
            fetch: function() {
                console.log(fetch);
            }
        };
        var myDog = Object.create(dog);
        var empty = Object.create(null);
        var testResult = isPrototypeOf(dog, empty);
        eq(testResult, false);
    },
    'It should return false if one object is entered for the arguments.': function() {
        var barbara = {};
        var testResult = isPrototypeOf(barbara);
        eq(testResult, false);
    },
    'It should throw an exception if prototypeObj is undefined with one arg.': function () {
        var thrownError,
        errorTestObject;
        try {
            isPrototypeOf(errorTestObject);
        }
        catch (e) {
            thrownError = true;
            eq(e instanceof TypeError, true);
        }
        eq(thrownError, true);
    },
    'It should throw an exception if prototypeObj is undefined with two args.': function () {
        var thrownError2,
        errorTestObject2,
        workingObject = {};
        try {
            isPrototypeOf(errorTestObject2, workingObject);
        }
        catch (e) {
            thrownError2 = true;
            eq(e instanceof TypeError, true);
        }
        eq(thrownError2, true);
    },
    // '--- Ben's tests ---'
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
        var undefinedObject = undefined;
        try {
            isPrototypeOf(undefinedObject, myDog);
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
    },
    'It should return false when primitive value is passed in as object.': function() {
        var result = isPrototypeOf(Object.prototype, 'string');
        var resultTwo = isPrototypeOf(dog, 10);
        var resultThree = isPrototypeOf(canine, true);

        eq(result, false);
        eq(resultTwo, false);
        eq(resultThree, false);
    }
});
