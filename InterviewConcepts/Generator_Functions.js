function* evenNumbers() {
    let num = 0;
    while (true) {
      yield num;
      num += 2;
    }
}

const evenNumIterator = evenNumbers();

console.log(evenNumIterator.next().value); // 0
console.log(evenNumIterator.next().value); // 2
console.log(evenNumIterator.next().value); // 4
console.log(evenNumIterator.next().value); // 6
