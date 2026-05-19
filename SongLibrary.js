const { isPalindrome } = require("./algorithms");

class Song {
    constructor(title, artist, genre, duration) {
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.duration = duration;
    }
}

class Songlibrary{
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

    sortByDuration(){
        let arr = this.item;
        for (let i = 0; i < arr.length - 1; i++){
            for (let j = 0; j < arr.length - i - 1; j++){
                if (arr[j].duration > arr[j + 1].duration){
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    searchbyTitle(title){
        for(let song of this.item){
            if(song.title === title){
                return song;
            }
        }
        return null;
    }

    removeDuplicate(){
        const seen = new Set();
        const uniqueSongs = [];
        for(let song of this.item){
            if(!seen.has(song.title)){
                seen.add(song.title);
                uniqueSongs.push(song);
            }
        }
        this.item = uniqueSongs;
        return this.item;
    }

    findPalindromeTitles(){
        const palindromes = [];
        for(let song of this.item){
            if (isPalindrome(song.title)) {
                palindromes.push(song);
            }
        }
        return palindromes;
    }
}

const library = new Songlibrary();

const song1 = new Song("Essence", "Wizkid", "Afrobeats", 204);
const song2 = new Song("Baba mi", "BBO", "Gospel", 200);
const song3 = new Song("Odogwu", "Burna", "Afrobeats", 180);
const song4 = new Song("Race Car", "Davido", "Afrobeats", 190);
const song5 = new Song("Eagles Flight", "Fireboy", "Afrobeats", 220);
const song6 = new Song("Madam", "Fireboy", "Afrobeats", 220);

library.addsong(song1)
library.addsong(song2)
library.addsong(song3)  
library.addsong(song4)
library.addsong(song5)
library.addsong(song6) 
console.log("Before:", library.item);
console.log("After:", library.sortByDuration());
console.log("After", library.searchbyTitle("Essence")); 
console.log("remove", library.removeDuplicate());

console.log(library.item[0]);

console.log(library.findPalindromeTitles());
