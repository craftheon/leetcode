const assert = require('node:assert/strict')

var LRUCache = function (capacity) {
    this.cache = new Map()
    this.cap = capacity
};

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, v)
    return this.cache.get(key)
};

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    this.cache.set(key, value)
    if (this.cache.size > this.cap) {
        this.cache.delete(this.cache.keys().next().value)
    }
};

(function () {
    // test code here
    console.log('Accepted!')
})()
