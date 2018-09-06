<template>
  <div class="home">
    <h1 class="font"> What are we listening to today</h1>
      <form class="form" @submit.prevent="search">
        <input type="text" v-model="artist">
          <button type="serach">Search</button>
      </form>
      <div class="music-list">
        <div class="search-results" v-if="songs">
          <h1>Search Results</h1>
            <div v-for="song in songs" :key="song.tempId">
              <h1>{{song.name}}</h1>
                <h2>{{song.artist}}</h2>
                  <img :src="song.albumArt" />
                    <h2>{{song.album}}</h2>
                      <audio :src="song.audioPreview" controls v-on:play="playPreview($event)"></audio>
                        <button @click="addToPlaylist(song, playlist._id)">Add Song</button>
           </div>
        </div>
        <div class="playlist">
          <h1>{{playlist.name}}</h1>
            <div v-for="(song) in playlist.songs" :key="song.id">
              <h1>{{song.name}}</h1>
                <h2>{{song.artist}}</h2>
                  <img :src="song.albumArt" />
                    <h2>{{song.album}}</h2>
                      <audio :src="song.audioPreview" controls v-on:play="playPreview($event)"></audio>
                        <button @click="removeFromPlaylist(song, playlist._id)">Delete</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      artist: ""
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
    playlist() {
      return this.$store.state.playlist;
    }
  },
  mounted() {
    if (!this.songs) {
      this.$store.dispatch("getSongs");
    }

      this.$store.dispatch("getPlaylists")
  },
  methods: {
    search(event) {
      this.$store.dispatch("search", this.artist);
    },
    addToPlaylist(song, playlistId) {
      let obj = {
        song,
        playlistId
      };
      this.$store.dispatch("addToPlaylist", obj);
    },
    removeFromPlaylist(song, playlistId) {
      let obj = {
        song,
        playlistId
      };
      this.$store.dispatch("removeFromPlaylist", obj);
    },
    playPreview(event) {
      let previews = document.getElementsByTagName("audio");
      for (let i = 0; i < previews.length; i++) {
        const listen = previews[i];
        if (listen == event.target) {
          listen.play();
        } else {
          listen.pause();
        }
      }
    }
  }
};
</script>

<style>
.home{
  position: relative;
  height: 100%;
  background-image: repeating-radial-gradient(rgb(255, 0, 179) 10%, orange 15%, rgb(0, 217, 255) 20%)
}
.form{
  display: flex;
  justify-content: center
}
.font{
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-family: 'Permanent Marker', cursive;
}
.music-list {
  display: flex;
  justify-content: center;
}
</style>