export class Helper {
	public static sleep(milliseconds: number): Promise<number> {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	}

	public static removeHTML(str: string) {
		const tmp = document.createElement('img');
		tmp.innerHTML = str;
		return tmp.textContent || tmp.innerText || '';
	}

	// a static method that filters a rss summary string from html tags and returns the first 100 characters
	public static filterSummary(str: string) {
		const tmp = document.createElement('div');

		str = str.split('Beschreibung')[1];

		tmp.innerHTML = str;
		const text = tmp.textContent || tmp.innerText || '';
		return text.substring(0, 500) + '...';
	}
}
