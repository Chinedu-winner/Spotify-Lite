class Song {
    constructor(title, artist, genre, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
    }

    describe(){
        return `${this.title} by ${this.artist} - ${this.duration} [(${this.genre})]` 
    }
}

const song = new Song("Essence", "Wizkid", "Afrobeats", 204);


console.log(song.describe());
