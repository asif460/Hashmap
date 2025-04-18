const HashMap = require('./HashMap');

class HashSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.map = new HashMap(initialCapacity, loadFactor);
  }

  add(key) {
    this.map.set(key, true); // Value is irrelevant
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }

  size() {
    return this.map.length();
  }

  clear() {
    this.map.clear();
  }

  keys() {
    return this.map.keys();
  }
}

module.exports = HashSet;