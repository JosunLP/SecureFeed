import { Config } from '../classes/Config';
import { Helper } from '../classes/Helper';
import FeedChoiceChanged from '../events/FeedChoiceChanged';
import type FeedChoice from '../model/FeedChoice';
import { Result } from '../model/Result';
import { ApiService } from './api.srvs';
import { PathService } from './path.srvs';

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
	private _data: Result;

	private constructor() {
		console.log('FeedService: constructor()');
		const pathService = PathService.getInstance();
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

		this._feedChoice = Config.feedChoices[0];

		if (pathService.pathChoice !== undefined) {
			const choice = Config.feedChoices.find(
				(feedChoice) => feedChoice.key === pathService.pathChoice
			);

			if (choice !== undefined) {
				this._feedChoice = choice;
			}
		}

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

	public get data(): Result {
		return this._data;
	}

	public set feedChoice(feedChoice: FeedChoice) {
		this._feedChoice = feedChoice;
		this._api.url = feedChoice.url;

		document.dispatchEvent(new FeedChoiceChanged(feedChoice));
	}

	//#endregion

	private async main() {
		console.log('FeedService: main()');
	}

	private async rotatePostsContinuously() {
		console.log('FeedService: rotatePostsContinuously()');
		while (await ApiService.isOk(this._feedChoice.url)) {
			for (let i = 0; i < this._api.data.length; i++) {
				this._data = this._api.data[i];
				document.dispatchEvent(new CustomEvent('dataChanged', { detail: this._data }));
				await Helper.sleep(Config.slideShownTimeout);
			}
			await Helper.sleep(1000);
		}
		console.warn('FeedService: rotatePostsContinuously() stopped');
	}
}
