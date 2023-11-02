<script lang="ts">
	import FeedService from '../services/feed.srvs';
	import PostComponent from './PostComponent.svelte';

	let feedService = FeedService.getInstance();
	$: data = feedService.data;

	// rotatePostsContinuously();
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
  margin-top: 5rem
  margin-bottom: 5rem
  margin-left: 5rem
</style>
