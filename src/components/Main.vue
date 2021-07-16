<template>
  <div class="main">
    <header>
      <div id="brand">
        <img src="@/assets/logo.png" />
        <h1>SecureFeed</h1>
      </div>

      <h2>Powered by <a href="https://heise.de">Heise.de</a></h2>
      <h4>Made available by <a href="https://JosunLP.de">JosunLP.de</a></h4>
    </header>
    <div id="content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Renderer } from "../classes/Renderer";
import { Api } from "../classes/Api";
import { Helper } from "../classes/Helper";
import { Slider } from "../classes/Slider";
import { Config } from "../classes/Config";

@Component
export default class Main extends Vue {
  @Prop() private msg!: string;
}

async function main() {
  const slider = new Slider();

  slider.run(Config.itemName);

  while (
    (
      await fetch(
        "https://www.heise.de/security/rss/alert-news-atom.xml",
        Api.header
      )
    ).ok
  ) {
    let api = new Api("https://www.heise.de/security/rss/alert-news-atom.xml");
    let data = await api.data;

    Renderer.renderList(data, Config.containerName);

    slider.slideShowStep(Config.itemName);

    await Helper.sleep(300000);
  }
}

main();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
