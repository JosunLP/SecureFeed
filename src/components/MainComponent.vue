<template>
  <div class="main">
    <div id="content"></div>
  </div>
</template>

<script lang="ts">
import { Renderer } from '../classes/Renderer';
import { Api } from '../classes/Api';
import { Helper } from '../classes/Helper';
import { Slider } from '../classes/Slider';
import { Config } from '../classes/Config';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainComponent',
  props: {
    msg: {
      type: String,
      default: 'Hello Vue!',
    },
  },
});

async function main() {
  const slider = Slider.getInstance();

  slider.run(Config.itemName);

  await Helper.sleep(200);

  let feed = <HTMLSelectElement>document.getElementById('feedChoice');

  while ((await fetch(feed.value, Api.header)).ok) {
    let api = new Api(feed.value);
    let data = await api.data;

    Renderer.renderList(data, Config.containerName);

    slider.slideShowStep(Config.itemName);

    await Helper.sleep(Config.crawlTimeout);
  }
}

main();
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass"></style>
