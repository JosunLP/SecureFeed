import type { Result } from '../model/Result';

export default class DataChanged extends CustomEvent<Result> {
	public static eventName = 'dataChanged';

	constructor(feedChoice: Result) {
		super(DataChanged.eventName, {
			detail: feedChoice
		});
	}
}
