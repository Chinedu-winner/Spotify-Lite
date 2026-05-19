class Playlist{
    constructor(song) {
        this.value = song;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    addSong(song){
        const newSong = new Playlist(song);
        if(!this.head){
            this.head = newSong;
            this.tail = newSong;
        }else{
            this.tail.next = newSong;
            this.tail = newSong;
        }
        this.length++
    }

    insertAtIndex(idx, song){
        if(idx < 0 || idx > this.length) return 
        if(idx === 0) return this.addToFront(val)
        if(idx === this.length) return this.song(val)
            const NewNode = new Node(val);
            const prevVail = this.getAtIndex(idx - 1);
            NewNode.next = prevVail.next;
            prevVail.next = NewNode;     
            this.length++;
            return this; 
    }

    removeAt(index){
        if (index < 0 || index >= this.length) return null; 
        if (index === 0) return this.shift(); 
        if (index === this.length - 1) return this.pop(); 
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed.value;
    }

    reverse(){
        if(!this.head || this.length ==1) return this;
        let prev = null;
        let current = this.head; 
        for (let index = 0; index < this.length; index++){
            const next = current.next;
            current.next = prev;
            prev = current
            current = next
        }
        this.head = prev;
        return this; 
    }

    toArray(){
        const res = [];
        let cur = this.head;
    while(cur){
        res.push(cur.value)
        cur = cur.next
    }
        return res 
    }

    addToFront(song){
        const node = new Playlist(song)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        } 
        this.length++;
        return this;
    }

    getSongAt(index){

    }

    shuffle(){
        let arr = this.toArray();
        for (let i = this.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let song of arr){
            this.addSong(song);
        }
    return this;
    }
}

const unique = new SingleLinkedList();
unique.addSong('Too Faithful')
unique.addSong('Daddy Wey Dey Pampe')
unique.addSong('Excess Love')
unique.addSong('Fragrance to Fire')
unique.addSong('I Will Pray')
console.log(unique);
console.log("Before shuffle:", unique.toArray());
    unique.shuffle();
console.log(unique.toArray());
