class Access{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class UpNextQueue{
    constructor(){
        this.first = null;
        this.last = null; 
        this.length =0;
    }
    enqueue(value){
        const newNode = new Access(value)
        if(!this.first){
            this.first = this.last = newNode 
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
    }

    dequeue(value){
        if (!this.first)return "The queue is working well and prefectly";
        const removed = this.first.value;
        this.first = this.first.next;
        if(!this.first){
            this.last = null;
        }
        this.length--;
        return removed; 
    }

    size(){
        return this.length;
    }

    isEmpty(){
        return this.length === 0;  
    }

    peek(){
        if (this.length == 0)return "The system is full";
        return this.first.value; 
    }
}

const system = new UpNextQueue();
system.enqueue('The Blood and The Name')
system.enqueue('More Than Gold')
system.enqueue('Take Over')
system.enqueue('Eagles Flight')
console.log(system.dequeue())

module.exports = UpNextQueue;