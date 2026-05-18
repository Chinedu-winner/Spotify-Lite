class SportifyLite {
    constructor() {
        this.player = new Player();
        this.upNextQueue = new Upnext();  
        this.historyStack = new HistoryStack();
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
            this.buildLibrary.addSong(song);
        }
        console.log(this.buildLibrary.songs);        
    }

    buildPlaylist(){
        for (let i = 0; i < this.playlist.length; i++) {
            this.playlist.addSong(
                this.song[i].title
            );            
        }
        console.log("5 songs added");        
    }

    LoadPlaylist(){
        this.player.loadPlaylist(
            this.song[0].title,
            this.song[1].title,
            this.song[2].title,
            this.song[3].title,
            this.song[4].title,
            this.song[5].title,
            this.song[6].title,
            this.song[7].title
        );
        
    }
}