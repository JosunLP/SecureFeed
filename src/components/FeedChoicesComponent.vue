<template>
  <select name="feedChoice" :id="id">
    <option
      v-for="choice in feedChoices"
      v-bind:key="choice.key"
      :value="choice.url"
      :onclick="selectChoice(choice)"
    >
      {{ choice.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FeedService from '../services/feed.srvs';
import FeedChoice from '../model/FeedChoice';

const feedService = FeedService.getInstance();

export default defineComponent({
  name: 'FeedChoiceComponent',
  props: {
    id: {
      type: String,
      default: 'feedChoice',
    },
  },
  data() {
    return {
      feedChoices: feedService.getFeedChoices() as FeedChoice[],
    };
  },
  methods: {
    selectChoice(choice: FeedChoice) {
      feedService.setFeedChoice(choice);
    },
  },
});
</script>

<style lang="sass">
@import '../css/_color'

#feedChoice,
#feedChoice:focus,
#feedChoice:scope,
#feedChoice:active,
#feedChoice:hover,
#feedChoice:visited,
#feedChoice:link,
#feedChoice:target,
#feedChoice:enabled,
#feedChoice:disabled,
#feedChoice:checked,
#feedChoice:indeterminate,
#feedChoice:default
  color: white
  background-color: $primary-color
  border-color: $primary-color
  padding-bottom: 0.4em
  border-radius: 0
  border-color: rgba(0, 0, 0, 0)
  margin-left: -0.4em
</style>
