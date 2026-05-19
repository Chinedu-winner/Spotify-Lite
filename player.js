const HistoryStack = require('./historyStack');
class PlayerNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Player{
    constructor(value){
        this.head = value;
        this.tail = null; 
        this.current = null; 

        this.history = new HistoryStack();
    }

    loadPlaylist(playlist){
        for (let song of playlist){
            const newNode = new PlayerNode(song);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        this.current = this.head;
    }

    play(){
        if(!this.current){
            console.log('No song loaded');
            return
        }
        console.log(`Now Playing: ${this.current.value}`);

        this.history.push(this.current.value);
    }

    next(){
        if (!this.current || !this.current.next){
            console.log("No next song");
            return 
        }
        this.current = this.current.next;
        this.play();
    }

    previous(){
        if(!this.current || !this.current.prev){
            console.log('No previous song');
            return
        }
        this.current = this.current.prev;
        this.play();
    }

    currentSong(){
        if(!this.current)return null; 
        return this.current.value;
    }
}

const player = new Player();

player.loadPlaylist(['Glory', 'Way Maker', 'Odogwu']);

player.play();
player.next();
player.previous();
console.log(player.currentSong());

module.exports = Player;