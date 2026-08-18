<script lang="ts">
	import { onMount } from 'svelte';
	import DataChanged from '../events/DataChanged';
	import type { Result } from '../model/Result';
	import FeedService from '../services/feed.srvs';
	import PostComponent from './PostComponent.svelte';

	const feedService = FeedService.getInstance();

	let data: Result = feedService.data;

	const onDataChanged = (event: Event) => {
		data = (event as DataChanged).detail;
	};

	onMount(() => {
		document.addEventListener(DataChanged.eventName, onDataChanged);
		return () => document.removeEventListener(DataChanged.eventName, onDataChanged);
	});
</script>

<div class="main">
	<div id="content">
		<PostComponent {data} />
	</div>
</div>

<style lang="sass">
.main
  display: flex
  flex-wrap: wrap
  width: 80%
  margin-top: 10%
  margin-bottom: 5rem
  margin-left: 3rem
</style>
