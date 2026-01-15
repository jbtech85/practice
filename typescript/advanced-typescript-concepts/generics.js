// this is fine, but locked into string
function printString(arg) {
    console.log(arg);
    return arg;
}
// same function, with generics
function printSomething(arg) {
    console.log(arg);
    return arg;
}
// printSomething<string>("let the function know the type without inferring");
// i used inference on all of mine
// printString("This is definitely a string");
// printSomething("This is also a string");
// printSomething(42);
// printSomething([2, 3, 5, 7, 11]);
function getFirst(arr) {
    return arr[0];
}
var first = getFirst(['an', 'array', 'of', 'strings']);
// console.log(first);
var numericFirst = getFirst([8, 6, 7, 5, 3, 0, 9]);
// console.log(numericFirst);
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
var mergeArraysArrow = function (arr1, arr2) { return arr1.concat(arr2); };
var edward = ['The', 'Fullmetal', 'Alchemist'];
var roy = ['The', 'Flame', 'Alchemist'];
var alchemists = mergeArrays(edward, roy);
var alsoAlchemists = mergeArraysArrow(roy, edward);
// console.log(alchemists);
// console.log(alsoAlchemists);
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    // accessors
    KeyValuePair.prototype.displayPair = function () {
        console.log("Key: ".concat(this.key, " - Value: ").concat(this.value));
    };
    return KeyValuePair;
}());
var newPair = new KeyValuePair("name", "Jausche");
// newPair.displayPair();
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = [];
    }
    // add an item to end of array
    Queue.prototype.enqueue = function (item) {
        this.storage.push(item);
    };
    // attempt to remove an item from start of array, array might be empty and we'll receive undefined
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    // return number of elements in queue
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    // return true if queue is empty
    Queue.prototype.isEmpty = function () {
        return this.storage.length === 0;
    };
    // return front element without removing it
    Queue.prototype.peek = function () {
        return this.storage[0];
    };
    return Queue;
}());
var newQueue = new Queue();
if (newQueue.isEmpty()) {
    // console.log("queue empty: A");
}
newQueue.enqueue(9);
newQueue.enqueue(5);
if (newQueue.isEmpty()) {
    // console.log("queue still empty: B");
}
else {
    // console.log("queue not empty: B");
    // console.log(newQueue.size());
    // console.log(newQueue.peek());
    // console.log(newQueue.dequeue());
    // console.log(newQueue.size());
}
var configProp = {
    key: 'url',
    value: 'www.someurl.com'
};
function createResponse(responseStatus, message, data) {
    return { responseStatus: responseStatus, message: message, data: data };
}
// enjoy >> https://http.cat/
var stringResponse = createResponse(204, "No Content", "Just kidding, have a string");
// console.log(stringResponse);
var numbersResponse = createResponse(301, "Moved Permanently", [2, 4, 6, 8]);
var ElementHolder = /** @class */ (function () {
    function ElementHolder(values) {
        if (values === void 0) { values = []; }
        this.values = [];
        this.values = values;
    }
    ElementHolder.prototype.print = function (value) {
        console.log(value);
    };
    ElementHolder.prototype.printAllVals = function () {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var val = _a[_i];
            this.print(val);
        }
    };
    ElementHolder.prototype.addVal = function (value) {
        this.values.push(value);
    };
    ElementHolder.prototype.removeVal = function (value) {
        this.values = this.values.filter(function (v) { return v !== value; });
    };
    return ElementHolder;
}());
var newHolder = new ElementHolder(["Bartz", "Lenna", "Galuf", "Faris"]);
newHolder.printAllVals();
newHolder.addVal("Krile");
newHolder.removeVal("Galuf");
console.log("---------------------");
newHolder.printAllVals();
