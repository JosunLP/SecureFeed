<script lang="ts">
	import { Api } from '../classes/Api';
	import { Helper } from '../classes/Helper';
	import { Config } from '../classes/Config';
	import FeedService from '../services/feed.srvs';
	import PostComponent from './PostComponent.svelte';
	import type { Result } from '../model/Result';

	let dataCollection: Result[];
	let data: Result;

	const feedService = FeedService.getInstance();

	Helper.sleep(200);

	let feed = feedService.getFeedChoice();

	while (isOk(feed.url, Api.header)) {
		let api = new Api(feed.url);

		api.data.then((data) => {
			dataCollection = data;
		});

		Helper.sleep(Config.crawlTimeout);
	}

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

</style>
