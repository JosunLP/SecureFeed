import FeedChoice from '../model/FeedChoice';

export class Config {
	public static itemName = 'entry';

	public static containerName = 'content';

	public static crawlTimeout = 10000;

	public static slideShownTimeout = 23000;

	public static feedChoices: FeedChoice[] = [
		new FeedChoice(
			'Heise Security News RSS',
			'heiseSecNews',
			'https://www.heise.de/security/rss/news.rdf'
		),
		new FeedChoice(
			'Heise Security Alert RSS',
			'heiseSecAlert',
			'https://www.heise.de/security/rss/alert-news.rdf'
		),
		new FeedChoice(
			'Heise Developer RSS',
			'heiseDevNews',
			'https://corsify.de/API.php?apiMode=feed&feedMode=atom&dataUrl=https://www.heise.de/developer/rss/news-atom.xml'
		),
		new FeedChoice(
			'BSI (Presse-, Kurzmitteilungen und Veranstaltungshinweise)',
			'BSIPresse',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed.xml'
		),
		new FeedChoice(
			'BSI Kurzinformationen des CERT-Bund zu Sicherheitslücken und Schwachstellen in IT-Systemen',
			'BSIWarn',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://wid.cert-bund.de/content/public/securityAdvisory/rss'
		),
		new FeedChoice(
			'BSI Produktzertifizierung',
			'BSIProdZert',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_Produktzertifizierung.xml'
		),
		new FeedChoice(
			'Allianz für Cybersicherheit ACS Aktuelle Informationen',
			'AfCAktInfo',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.allianz-fuer-cybersicherheit.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/ACS_RSSNewsfeed.xml'
		),
		new FeedChoice(
			'Alle Warnungen von CERT.at',
			'CERTat',
			'https://corsify.de/API.php?apiMode=feed&feedMode=atom&dataUrl=https://cert.at/cert-at.de.warnings.atom_1.0.xml'
		)
	];
}
