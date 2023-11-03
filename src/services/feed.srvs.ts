import { Config } from '../classes/Config';
import { Helper } from '../classes/Helper';
import FeedChoiceChanged from '../events/FeedChoiceChanged';
import type FeedChoice from '../model/FeedChoice';
import { Result } from '../model/Result';
import { ApiService } from './api.srvs';

/**
 * Feed service
 * @class FeedService
 * @singleton
 * @since 2.0.0
 * @description A Service that handles the feed data
 */
export default class FeedService {
	private static instance: FeedService;
	private _feedChoice: FeedChoice;
	private _api: ApiService;
	private _dataCollection: Result[];
	private _data: Result;

	private constructor() {
		console.log('FeedService: constructor()');
		this._data = new Result(
			'Loading...',
			'Loading...',
			'01.01.0001',
			'01.01.0001',
			'https://127.0.0.1',
			'Loading...',
			'Loading...',
			''
		);
		this._dataCollection = [];
		this._feedChoice = Config.feedChoices[0];
		this._api = ApiService.getInstance(this._feedChoice.url);

		this.main();
		this.rotatePostsContinuously();
	}

	public static getInstance(): FeedService {
		if (!FeedService.instance) {
			FeedService.instance = new FeedService();
		}

		return FeedService.instance;
	}

	//#region Getters and Setters

	public get feedChoice(): FeedChoice {
		return this._feedChoice;
	}

	public get feedChoices(): FeedChoice[] {
		return Config.feedChoices;
	}

	public get dataCollection(): Result[] {
		return this._dataCollection;
	}

	public get data(): Result {
		return this._data;
	}

	public set feedChoice(feedChoice: FeedChoice) {
		this._feedChoice = feedChoice;
		this._api.url = feedChoice.url;

		document.dispatchEvent(new FeedChoiceChanged(feedChoice));
	}

	private set dataCollection(dataCollection: Result[]) {
		this._dataCollection = dataCollection;
	}

	//#endregion

	private async main() {
		console.log('FeedService: main()');
		while ((await fetch(this._feedChoice.url, ApiService.header)).ok) {
			this.dataCollection = this._api.data;
			await Helper.sleep(Config.crawlTimeout);
		}
		console.warn('FeedService: main() stopped');
	}

	private async rotatePostsContinuously() {
		console.log('FeedService: rotatePostsContinuously()');
		while ((await fetch(this._feedChoice.url, ApiService.header)).ok) {
			for (let i = 0; i < this._dataCollection.length; i++) {
				this._data = this._dataCollection[i];
				document.dispatchEvent(new CustomEvent('dataChanged', { detail: this._data }));
				await Helper.sleep(Config.slideShownTimeout);
			}
			await Helper.sleep(2000);
		}
		console.warn('FeedService: rotatePostsContinuously() stopped');
	}
}
