<template>
  <div class="main">
    <header>
      <h1>SecureFeed</h1>
    </header>
    <div id="content">
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Renderer } from '../classes/Renderer'
import { Api } from '../classes/Api'
import { Helper } from '../classes/Helper'

@Component
export default class Main extends Vue {
  @Prop() private msg!: string;
}

async function main() {

  while ((await fetch("https://www.heise.de/security/rss/alert-news-atom.xml", { mode: 'cors'})).ok) {

    let api = new Api("https://www.heise.de/security/rss/alert-news-atom.xml")
    let data = await api.data

    Renderer.renderList(data, "content")

    await Helper.sleep(30000)
  }

}

main()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
