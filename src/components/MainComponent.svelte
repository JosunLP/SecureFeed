<script lang="ts">
	import { Api } from '../classes/Api';
	import FeedService from '../services/feed.srvs';
	import type { Result } from '../model/Result';
	import PostComponent from './PostComponent.svelte';
	import { Helper } from '../classes/Helper';
	import { Config } from '../classes/Config';

	let dataCollection: Result[];
	let data: Result;

	let feedService = FeedService.getInstance();

	let feed = feedService.getFeedChoice();

	let api = new Api(feed.url);

	api.data.then((dataResult) => {
		dataCollection = dataResult;

		data = dataCollection[0];
	});

	async function isOk(url: string, header: RequestInit) {
		return (await fetch(url, header)).ok;
	}

	async function rotatePostsContinuously() {
		while (true) {
			try {
				for (let i = 0; i < dataCollection.length; i++) {
					data = dataCollection[i];
					await Helper.sleep(Config.slideShownTimeout);
				}
			} catch (error) {
				continue;
			}
			await Helper.sleep(1000);
		}
	}

	async function main() {
		while (await isOk(feed.url, Api.header)) {
			api.data.then((dataResult) => {
				dataCollection = dataResult;
			});
			Helper.sleep(Config.crawlTimeout);
		}
	}

	main();
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
