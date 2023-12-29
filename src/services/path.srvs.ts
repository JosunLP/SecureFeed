import { Config } from '../classes/Config';

/**
 * Path service
 */
export class PathService {
	private static instance: PathService;
	private _pathChoice: string | undefined;

	private constructor() {
		const pathKeyValuePairs = this.getPathKeyValuePairs();

		Config.feedChoices.forEach((feedChoice) => {
			if (pathKeyValuePairs.length > 0) {
				pathKeyValuePairs.forEach((pathKeyValuePair) => {
					if (pathKeyValuePair[0] === 'feed') {
						if (pathKeyValuePair[1] === feedChoice.key) {
							this._pathChoice = feedChoice.key;
						}
					}
				});
			}
		});

		console.log('PathService: ' + this._pathChoice);
	}

	public static getInstance(): PathService {
		if (!PathService.instance) {
			PathService.instance = new PathService();
		}

		return PathService.instance;
	}

	//#region Getters and Setters
	public get pathChoice(): string | undefined {
		return this._pathChoice;
	}

	public set pathChoice(pathChoice: string) {
		this._pathChoice = pathChoice;
	}

	//#endregion

	private getPathKeyValuePairs(): string[][] {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const pathKeyValuePairs: string[][] = [];
		for (const [key, value] of urlParams) {
			pathKeyValuePairs.push([key, value]);
		}
		return pathKeyValuePairs;
	}
}
