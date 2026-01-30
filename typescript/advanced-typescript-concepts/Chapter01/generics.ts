// this is fine, but locked into string
function printString(arg: string): string {
  console.log(arg);
  return arg;
}

// same function, with generics
function printSomething<TheType>(arg: TheType): TheType {
  console.log(arg);
  return arg;
}

// printSomething<string>("let the function know the type without inferring");


// i used inference on all of mine
// printString("This is definitely a string");
// printSomething("This is also a string");
// printSomething(42);
// printSomething([2, 3, 5, 7, 11]);


function getFirst<T>(arr: T[]): T {
  return arr[0];
}
let first = getFirst<string>(['an', 'array', 'of', 'strings']);
// console.log(first);
let numericFirst = getFirst<number>([8, 6, 7, 5, 3, 0, 9]);
// console.log(numericFirst);


function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const mergeArraysArrow = <T>(arr1: T[], arr2: T[]): T[] => arr1.concat(arr2);
let edward = ['The', 'Fullmetal', 'Alchemist'];
let roy = ['The', 'Flame', 'Alchemist'];
let alchemists = mergeArrays<string>(edward, roy);
let alsoAlchemists = mergeArraysArrow<string>(roy, edward);
// console.log(alchemists);
// console.log(alsoAlchemists);


class KeyValuePair<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  // accessors

  displayPair(): void {
    console.log(`Key: ${this.key} - Value: ${this.value}`);
  }
}

let newPair = new KeyValuePair<string, string>("name", "Jausche");
// newPair.displayPair();


class Queue<T> {
  private storage: T[] = [];

  // add an item to end of array
  enqueue(item: T) {
    this.storage.push(item);
  }

  // attempt to remove an item from start of array, array might be empty and we'll receive undefined
  dequeue(): T | undefined {
    return this.storage.shift();
  }

  // return number of elements in queue
  size(): number {
    return this.storage.length;
  }

  // return true if queue is empty
  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  // return front element without removing it
  peek(): T | undefined {
    return this.storage[0];
  }
}

let newQueue = new Queue<number>();
if (newQueue.isEmpty()) {
  // console.log("queue empty: A");
}

newQueue.enqueue(9);
newQueue.enqueue(5);

if (newQueue.isEmpty()) {
  // console.log("queue still empty: B");
} else {
  // console.log("queue not empty: B");
  // console.log(newQueue.size());
  // console.log(newQueue.peek());
  // console.log(newQueue.dequeue());
  // console.log(newQueue.size());
}


interface Pair<K, V> {
  key: K;
  value: V;
}

let configProp: Pair<string, string> = {
  key: 'url',
  value: 'www.someurl.com'
}
// console.log(configProp.key);


interface NewResponse<T> {
  responseStatus: number;
  message: string;
  data: T;
}

function createResponse<T>(responseStatus: number, message: string, data: T): NewResponse<T> {
  return {responseStatus, message, data };
}

// enjoy >> https://http.cat/
const stringResponse = createResponse<string>(204, "No Content", "Just kidding, have a string");
// console.log(stringResponse);

const numbersResponse = createResponse<number[]>(301, "Moved Permanently", [2, 4, 6, 8]);
// console.log(numbersResponse);


interface Printer<T> {
  print(value: T): void;
}

class ElementHolder<T> implements Printer<T> {
  private values: T[] = [];

  constructor(values: T[] = []) {
    this.values = values;
  }

  print(value: T): void {
    console.log(value)
  }

  printAllVals(): void {
    for(const val of this.values){
      this.print(val);
    }
  }

  addVal(value: T): void {
    this.values.push(value);
  }

  removeVal(value: T): void {
    this.values = this.values.filter(v => v !== value);
  }
}

const newHolder = new ElementHolder<string>(["Bartz", "Lenna", "Galuf", "Faris"]);
newHolder.printAllVals();

newHolder.addVal("Krile");
newHolder.removeVal("Galuf");
console.log("---------------------");
newHolder.printAllVals();