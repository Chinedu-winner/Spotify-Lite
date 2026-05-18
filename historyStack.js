class HistoryStack{
    constructor(){
        this.item = [];
    }
    
    push(song){
        this.item.push(song);
        return this.item.length; 
    }

    pop(song){
        if(this.item.length == 0)return null;
        return this.item.pop();
    }

    peek(){
        if (this.item.length == 0)return "The software structure is  operating well";
        return this.item[this.item.length - 1];
    }

    size(){
        return this.item.length
    }
}

const history = new HistoryStack();

history.push('Essence')
history.push('Baba mi')
console.log(history.peek()) 

module.exports = HistoryStack;