class Song {
    constructor(title, artist, genre, duration) {
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.duration = duration;
    }
}

class SongLibrary{
    constructor(){
        this.length = 0;
        this.item = []; 
    }

    //Big O 
    push(val){
        this.item.push(val);
        return this.item.length;
    }

    //Big O 
    pop(val){
        if (this.item.length == 0) return null; 
        return this.item.pop();
    }

    //Big O 
    unshift(val){
        this.item.unshift(val);
        return this.item.length;
    }

    //Big O 
    size(val){
        return this.item.length;
    }

    //Big O 
    describe(){
        console.log(this.item.map(song => song.describe()).join(" <- "));
    }

    //Big O 
    addsong(val){
        this.item.push(val);
        return this.item.length; 
    }
}

const library = new SongLibrary();

const song1 = new Song("Essence", "Wizkid", "Afrobeats", 204);
const song2 = new Song("Baba mi", "BBO", "Gospel", 200);

library.addsong(song1)
library.addsong(song2)

console.log(library.item[0]);
module.exports = SongLibrary;