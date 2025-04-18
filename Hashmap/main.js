const HashMap = require('./HashMap');
const HashSet = require('./HashSet');

// --- Testing HashMap ---
const map = new HashMap(16, 0.75);

map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
console.log(map.get('banana')); // 'yellow'
console.log(map.has('apple')); // true
console.log(map.length()); // 3

// Test resizing by adding more entries
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');
map.set('moon', 'silver'); // Triggers resize

console.log("After resize:");
console.log("Capacity:", map.capacity); // 32
console.log("Size:", map.length()); // 12

// --- Testing HashSet ---
const set = new HashSet();
set.add('cat');
set.add('dog');
set.add('bird');
console.log(set.has('dog')); // true
set.remove('dog');
console.log(set.has('dog')); // false