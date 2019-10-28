<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>music app</h1>

    <ul>
      <artist v-for="artist in artists"
        :artist="artist"
        :key="artist.mbid"
        ></artist>
    </ul>

  </div>
</template>
<script>

import getArtists from './api'
import Artist from './components/Artist.vue'

export default {
  name: 'app',
  data () {
    return {
      artists: [
        // { name: 'David'},
        // { name: 'David'}
      ]
    }
  },
  components: {
    Artist: Artist
  },
  mounted: function () {
    const self = this
    getArtists()
      .then( function (artists ) {
        self.artists = artists
        console.log(self.artists)
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
