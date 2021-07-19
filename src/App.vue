<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/Main.vue';

@Component({
  components: {
    Main,
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

header {
  text-align: left;
  padding-left: 2rem;
  height: 8rem;
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
  font-size: 2.5rem;
}

.entry img {
  width: 30em;
  text-align: left;
  padding-right: 2em;
}

#brand {
  display: inline-flex;
}

#brand h1 {
  padding: 0;
  margin: 0;
}

#brand img {
  width: 2rem;
  height: 2rem;
  padding-right: 0.5em;
}

#feedChoice, #feedChoice:focus, #feedChoice::selection {
  color: white;
  background-color: #006882;
  border-color: #006882;
  padding: 0.5rem;
}

.entryContent {
  display: flex;
}

.entryContent p {
  width: auto;
}
</style>
