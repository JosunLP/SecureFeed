<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

@Component({
  components: {
    Main,
    Footer,
    Header
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #BFEFFF;
  margin-top: 60px;
  width: 100%;
}

body {
  background-color: #006882;
}

a {
  color: white
}

.entry {
  max-width: 100%;
  text-align: left;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  padding-left: 5rem;
  font-size: 2rem;
}

.entry a {
  font-size: 1rem;
}

.hide {
  display: none !important;
}

h3 {
  color: aliceblue;
  font-size: 2.2rem;
  padding-top: 5rem;
  padding-bottom: 1rem;
}

.entryContent {
  max-width: 70%;
  font-size: 0.8em;
}

.entryImage {
  max-width: 30%;
  max-height: 14rem;
  margin-right: 2rem;
}

.contentWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.container {
  margin-left: 0rem;
  margin-right: 0rem;
}

.qrCode {
  position:absolute;
  right: 0;
  margin-left: auto;
  margin-right: 5rem;
  max-width: 10rem;
  height: auto;
}
</style>
