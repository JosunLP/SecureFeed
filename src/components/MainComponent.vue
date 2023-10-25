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
import FeedService from '../services/feed.srvs';

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
  const feedService = FeedService.getInstance();

  slider.run(Config.itemName);

  const params: URLSearchParams = getQueryParamenters();

  await Helper.sleep(200);

  let feed = feedService.getFeedChoice();

  if (params.has('feed')) {
    feedService.getFeedChoices().forEach((element) => {
      if (element.key === params.get('feed')) {
        feed = element;
      }
    });
  }

  while ((await fetch(feed.url, Api.header)).ok) {
    let api = new Api(feed.url);
    let data = await api.data;

    Renderer.renderList(data, Config.containerName);

    slider.slideShowStep(Config.itemName);

    await Helper.sleep(Config.crawlTimeout);
  }
}

function getQueryParamenters() {
  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  return params;
}

main();
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass"></style>
