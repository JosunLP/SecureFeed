<script lang="ts">
	import type FeedChoice from '../model/FeedChoice';
	import FeedService from '../services/feed.srvs';

	let feedService = FeedService.getInstance();
	let selected: FeedChoice = feedService.feedChoice;

	let id = 'feedChoice';
	$: feedChoices = feedService.feedChoices;
</script>

<select
	bind:value={selected}
	name="feedChoice"
	{id}
	on:change={() => (feedService.feedChoice = selected)}
>
	{#each feedChoices as feedChoice}
		<option value={feedChoice}>
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
#feedChoice:indeterminate
  color: white
  background-color: $primary-color
  border-color: $primary-color
  padding-bottom: 0.4em
  border-radius: 0
  border-color: rgba(0, 0, 0, 0)
  margin-left: -0.4em
</style>
