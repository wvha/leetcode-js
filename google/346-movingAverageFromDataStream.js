var MovingAverage = function(size) {
    this.array = [];
    this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.array.push(val);
    while(this.array.length > this.size) {
        this.array.shift();
    }
    return this.array.reduce(function(acc, current) {
        return acc + current;
    }, 0)/Math.min(this.size, this.array.length);
};


// make use of constructor to hold array and size
// reduce ;)
// while loops are powerful
// use Math.min to do a this or that