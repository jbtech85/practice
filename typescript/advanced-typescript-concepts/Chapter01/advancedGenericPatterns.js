// example of what will cause an error
function printSomethingBroken(element) {
    // console.log(element.length); // throws an error on length, as we cannot be sure our type will have length
    return element;
}
function printSomething(element) {
    console.log(element.length); // no longer throwing the error
    return element;
}
// const firstPrint = printSomething([1, 2, 3]);
// console.log(firstPrint)
// console.log(printSomething("something"));
// generic constraint
// does identical as fixed function created above
function logLength(item) {
    console.log(item.length);
}
function processSerializable(item) {
    console.log(item.serialize());
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.serialize = function () {
        return JSON.stringify({ name: this.name, age: this.age });
    };
    return User;
}());
var user = new User("Jausche", 40);
// processSerializable(user);
// multiple options using a pipe
function wrapInArray(item, multiple) {
    return multiple ? [item] : item;
}
// console.log(wrapInArray("string", false));
// console.log(wrapInArray([1, 2, 3], true));
// default to string
var SomeList = /** @class */ (function () {
    function SomeList() {
        this.list = [];
    }
    SomeList.prototype.add = function (t) {
        this.list.push(t);
    };
    SomeList.prototype.getList = function () {
        return this.list;
    };
    return SomeList;
}());
var stringList = new SomeList();
stringList.add("TS");
stringList.add("is cool");
function getConfigValue(config, key) {
    return config[key];
}
var appConfig = {
    debug: true,
    logLevel: 'info',
    port: 3000
};
var debugStatus = getConfigValue(appConfig, 'debug');
var appPort = getConfigValue(appConfig, 'port');
var appLogLevel = getConfigValue(appConfig, 'logLevel');
// console.log(`debug is ${debugStatus?'True':'False'}, port is ${appPort}, and logLevel is ${appLogLevel}`);
var CreateSomeClass = /** @class */ (function () {
    function CreateSomeClass() {
    }
    CreateSomeClass.prototype.create = function (type) {
        return new type();
    };
    return CreateSomeClass;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Motor";
    }
    Cat.prototype.meow = function () {
        return "Meow!";
    };
    return Cat;
}());
var creator = new CreateSomeClass();
var myCat = creator.create(Cat);
console.log(myCat.name);
console.log(myCat.meow());
