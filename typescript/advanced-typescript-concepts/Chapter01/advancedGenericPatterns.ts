// example of what will cause an error
function printSomethingBroken<T>(element: T): T {
  // console.log(element.length); // throws an error on length, as we cannot be sure our type will have length
  return element;
}

function printSomething<T extends {length: number}>(element: T): T {
  console.log(element.length); // no longer throwing the error
  return element;
}

// const firstPrint = printSomething([1, 2, 3]);
// console.log(firstPrint)
// console.log(printSomething("something"));

// generic constraint
// does identical as fixed function created above
function logLength<T extends {length: number}>(item: T): void {
  console.log(item.length);
}

function processSerializable<T extends {serialize: () => string}>(item: T): void {
  console.log(item.serialize());
}

class User {
  constructor(public name: string, public age: number) {}

  serialize(): string {
    return JSON.stringify({name: this.name, age: this.age});
  }
}

const user = new User("Jausche", 40);
// processSerializable(user);


// multiple options using a pipe
function wrapInArray<T>(item: T, multiple: boolean): T | T[] {
  return multiple ? [item] : item;
}
// console.log(wrapInArray("string", false));
// console.log(wrapInArray([1, 2, 3], true));


// default to string
class SomeList<T = string> {
  private readonly list: T[] = []

  add(t: T): void {
    this.list.push(t)
  }

  getList(): T[] {
    return this.list
  }
}

const stringList = new SomeList();
stringList.add("TS");
stringList.add("is cool");
// stringList.getList
// console.log(stringList.getList())


/// ensure at compile time that only valid configurations are being passed in
interface AppConfig {
  debug: boolean;
  logLevel: 'info' | 'warning' | 'error';
  port: number;
}

function getConfigValue<Type, Key extends keyof Type>(config: Type, key: Key) {
  return config[key];
}

const appConfig: AppConfig = {
  debug: true,
  logLevel: 'info',
  port: 3000
};

const debugStatus = getConfigValue(appConfig, 'debug');
const appPort = getConfigValue(appConfig, 'port');
const appLogLevel = getConfigValue(appConfig, 'logLevel');

// console.log(`debug is ${debugStatus?'True':'False'}, port is ${appPort}, and logLevel is ${appLogLevel}`);


class CreateSomeClass<T> {
  create(type: {new(): T}): T {
    return new type();
  }
}

class Cat {
  name: string;

  constructor() {
    this.name = "Motor";
  }

  meow(): string {
    return "Meow!";
  }
}

const creator = new CreateSomeClass<Cat>();
const myCat = creator.create(Cat);
console.log(myCat.name);
console.log(myCat.meow());