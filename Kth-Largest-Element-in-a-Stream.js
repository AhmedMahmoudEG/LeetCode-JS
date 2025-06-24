class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const top = this.peek();
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._bubbleDown();
        }
        return top;
    }

    _bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[index] = parent;
            index = parentIdx;
        }
        this.heap[index] = element;
    }

    _bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[0];

        while (true) {
            let leftIdx = 2 * index + 1;
            let rightIdx = 2 * index + 2;
            let swap = null;

            if (leftIdx < length) {
                if (this.heap[leftIdx] < element) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swap === null && this.heap[rightIdx] < element) ||
                    (swap !== null && this.heap[rightIdx] < this.heap[leftIdx])
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k // store the value of k
    this.minHeap =new MinHeap(); // initialize an array to act as a min-heap

    // Insert each number from the initial array into the min-heap
    for(num of nums){
        this.add(num) // use the add function to maintain the heap property
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
        this.minHeap.push(val);
    if (this.minHeap.size() > this.k) {
        this.minHeap.pop(); // remove smallest if heap exceeds size k
    }
    return this.minHeap.peek(); // return the kth largest
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */