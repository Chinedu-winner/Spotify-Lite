const Player = require('./Player');
const UpNextQueue = require('./UpNextQueue');
const HistoryStack = require('./historyStack');
const SongLibrary = require('./SongLibrary');

class SportifyLite {
constructor() {
    this.player = new Player();
    this.upNextQueue = new UpNextQueue();
    this.historyStack = new HistoryStack()
    this.library = new SongLibrary();
    this.playlist = [];
}   

    createSong(){
        const song1 = {'title': 'Glory', 'artist': 'Nathaniel Bassey', 'genre': 'Gospel', 'duration': 300};
        const song2 = {'title': 'Way Maker', 'artist': 'Sinach', 'genre': 'Gospel', 'duration': 240};
        const song3 = {'title': 'Odogwu', 'artist': 'Burna', 'genre': 'Afrobeat', 'duration': 180};
        const song4 = {'title': 'Essence', 'artist': 'Wizkid', 'genre': 'Afrobeat', 'duration': 210};
        const song5 = {'title': 'Baba mi', 'artist': 'Olamide', 'genre': 'Afrobeat', 'duration': 200};
        const song6 = {'title': 'Take Over', 'artist': 'Davido', 'genre': 'Afrobeat', 'duration': 190};
        const song7 = {'title': 'Eagles Flight', 'artist': 'Fireboy', 'genre': 'Afrobeat', 'duration': 220};
        const song8 = {'title': 'More Than Gold', 'artist': 'Ladipoe', 'genre': 'Hip-Hop', 'duration': 230};
        this.playlist.push(song1, song2, song3, song4, song5, song6, song7, song8);
    }

    buildLibrary(){
        for (let song of this.playlist){
            this.library.addSong(song);
        }
        console.log(this.library.songs);        
    }

    buildPlaylist(){
        for (let i = 0; i < this.playlist.length; i++) {
            this.playlist.addSong(
                this.playlist[i].title
            );            
        }
        console.log("5 songs added");        
    }

    LoadPlaylist(){
        this.player.loadPlaylist(
            this.playlist[0].title,
            this.playlist[1].title,
            this.playlist[2].title,
            this.playlist[3].title,
            this.playlist[4].title,
            this.playlist[5].title,
            this.playlist[6].title,
            this.playlist[7].title
        );
        console.log('Player loaded');

        this.player.play(); 
        player.next();
        player.next();
        player.previous();
    }
}
const radio = new SportifyLite();

radio.createSong();

const queue = new UpNextQueue();

queue.enqueue(radio.playlist[5].title);
queue.enqueue(radio.playlist[6].title);

console.log("\n6. Queue added");

const nextSong = queue.dequeue();
console.log(`Next song: ${nextSong}`);
radio.historyStack.push(nextSong);
console.log("Now playing:", nextSong);

console.log("\n8. History:");
console.log(radio.historyStack.item);

console.log("\nQueue:");
console.log(queue);
