class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity).fill(null).map(() => []);
      this.capacity = initialCapacity;
      this.loadFactor = loadFactor;
      this.size = 0;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const existingEntry = bucket.find(entry => entry[0] === key);
  
      if (existingEntry) {
        existingEntry[1] = value; // Update existing key
      } else {
        bucket.push([key, value]);
        this.size++;
        if (this.size / this.capacity >= this.loadFactor) this._resize();
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const entry = bucket.find(entry => entry[0] === key);
      return entry ? entry[1] : null;
    }
  
    has(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      return bucket.some(entry => entry[0] === key);
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const entryIndex = bucket.findIndex(entry => entry[0] === key);
  
      if (entryIndex !== -1) {
        bucket.splice(entryIndex, 1);
        this.size--;
        return true;
      }
      return false;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.capacity).fill(null).map(() => []);
      this.size = 0;
    }
  
    keys() {
      const keys = [];
      for (const bucket of this.buckets) {
        for (const [key] of bucket) {
          keys.push(key);
        }
      }
      return keys;
    }
  
    values() {
      const values = [];
      for (const bucket of this.buckets) {
        for (const [, value] of bucket) {
          values.push(value);
        }
      }
      return values;
    }
  
    entries() {
      const entries = [];
      for (const bucket of this.buckets) {
        for (const entry of bucket) {
          entries.push(entry);
        }
      }
      return entries;
    }
  
    _resize() {
      const oldBuckets = this.buckets;
      this.capacity *= 2;
      this.buckets = new Array(this.capacity).fill(null).map(() => []);
      this.size = 0;
  
      for (const bucket of oldBuckets) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
  
  module.exports = HashMap; // For Node.js testing