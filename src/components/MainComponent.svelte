<script lang="ts">
	import FeedService from '../services/feed.srvs';
	import PostComponent from './PostComponent.svelte';

	let feedService = FeedService.getInstance();
	$: data = feedService.data;

	document.addEventListener('dataChanged', (e) => {
		data = FeedService.getInstance().data;
	});
</script>

<div class="main">
	<div id="content">
		<PostComponent {data} />
	</div>
</div>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass">
.main
  display: flex
  flex-wrap: wrap
  width: 80%
  margin-top: 14rem
  margin-bottom: 5rem
  margin-left: 3rem
</style>
