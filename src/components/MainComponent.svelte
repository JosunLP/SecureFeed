<script lang="ts">
	import { browser } from '$app/environment';
	import { Api } from '../classes/Api';
	import { Helper } from '../classes/Helper';
	import { Config } from '../classes/Config';
	import FeedService from '../services/feed.srvs';

	async function main() {
		const feedService = FeedService.getInstance();

		await Helper.sleep(200);

		let feed = feedService.getFeedChoice();

		while ((await fetch(feed.url, Api.header)).ok) {
			let api = new Api(feed.url);
			let data = await api.data;

			await Helper.sleep(Config.crawlTimeout);
		}
	}

	main();
</script>

<div class="main">
	<div id="content" />
</div>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass">

</style>
