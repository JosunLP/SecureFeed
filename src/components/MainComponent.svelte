<script lang="ts">
	import { Api } from '../classes/Api';
	import FeedService from '../services/feed.srvs';
	import type { Result } from '../model/Result';
	import PostComponent from './PostComponent.svelte';

	let dataCollection: Result[];
	let data: Result = {
		id: '',
		title: '',
		content: '',
		link: '',
		published: '',
		image: '',
		updated: '',
		summary: ''
	};
	let runnig: boolean = false;

	const feedService = FeedService.getInstance();

	let feed = feedService.getFeedChoice();

	let api = new Api(feed.url);

	api.data.then((dataResult) => {
		dataCollection = dataResult;

		data = dataCollection[0];
	});

	async function isOk(url: string, header: RequestInit) {
		return (await fetch(url, header)).ok;
	}
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
