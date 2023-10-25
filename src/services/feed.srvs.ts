import { Config } from '../classes/Config';
import FeedChoiceChanged from '../events/FeedChoiceChanged';
import type FeedChoice from '../model/FeedChoice';

export default class FeedService {
	private static instance: FeedService;
	private feedChoice: FeedChoice;

	private constructor() {
		this.feedChoice = Config.feedChoices[0];
	}

	public static getInstance(): FeedService {
		if (!FeedService.instance) {
			FeedService.instance = new FeedService();
		}

		return FeedService.instance;
	}

	public getFeedChoice(): FeedChoice {
		return this.feedChoice;
	}

	public getFeedChoices(): FeedChoice[] {
		return Config.feedChoices;
	}

	public setFeedChoice(feedChoice: FeedChoice): void {
		this.feedChoice = feedChoice;

		document.dispatchEvent(new FeedChoiceChanged(feedChoice));
	}
}
