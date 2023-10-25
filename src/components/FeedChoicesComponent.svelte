<script lang="ts">
	import FeedService from '../services/feed.srvs';
	import type FeedChoice from '../model/FeedChoice';

	const feedService = FeedService.getInstance();

	let id = 'feedChoice';
	let feedChoices = feedService.getFeedChoices() as FeedChoice[];

	function selectChoice(choice: FeedChoice) {
		feedService.setFeedChoice(choice);
	}
</script>

<select name="feedChoice" {id}>
	{#each feedChoices as feedChoice}
		<option value={feedChoice.url} on:click={() => selectChoice(feedChoice)}>
			{feedChoice.name}
		</option>
	{/each}
</select>

<style lang="sass">
@import '../sass/_color'

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
