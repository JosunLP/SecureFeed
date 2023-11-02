import FeedChoice from '../model/FeedChoice';

export class Config {
	public static itemName = 'entry';

	public static containerName = 'content';

	public static crawlTimeout = 5000;

	public static slideShownTimeout = 23000;

	public static feedChoices: FeedChoice[] = [
		new FeedChoice(
			'BSI (Presse-, Kurzmitteilungen und Veranstaltungshinweise)',
			'BSIPresse',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471'
		),
		new FeedChoice(
			'BSI Kurzinformationen des CERT-Bund zu Sicherheitslücken und Schwachstellen in IT-Systemen',
			'BSIWarn',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_WID.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471'
		),
		new FeedChoice(
			'BSI Sicherheitshinweise des Buerger-CERT',
			'BSISecBueCert',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_BuergerCERT.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471'
		),
		new FeedChoice(
			'BSI Produktzertifizierung',
			'BSIProdZert',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_Produktzertifizierung.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471'
		),
		new FeedChoice(
			'Slashdot',
			'slashdot',
			'https://corsify.de/API.php?apiMode=feed&feedMode=atom&dataUrl=http://rss.slashdot.org/Slashdot/slashdotMain'
		),
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
			'Allianz für Cybersicherheit ACS Aktuelle Informationen',
			'AfCAktInfo',
			'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.allianz-fuer-cybersicherheit.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/ACS_RSSNewsfeed.xml'
		),
		new FeedChoice(
			'Alle Warnungen von CERT.at',
			'CERTat',
			'https://cert.at/cert-at.de.warnings.atom_1.0.xml'
		),
		new FeedChoice(
			'Der deutschsprachige Blog von CERT.at',
			'CERTatBlog',
			'https://cert.at/cert-at.de.blog.atom_1.0.xml'
		),
		new FeedChoice(
			'Alle Tagesberichte von CERT.at',
			'CERTatDaily',
			'https://cert.at/cert-at.de.daily.atom_1.0.xml'
		)
	];
}
