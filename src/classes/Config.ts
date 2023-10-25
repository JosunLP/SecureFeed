import FeedChoice from 'src/model/FeedChoice';

export class Config {
  public static itemName = 'entry';

  public static containerName = 'content';

  public static crawlTimeout = 5000;

  public static slideShownTimeout = 23000;

  public static feedChoices: FeedChoice[] = [
    new FeedChoice('Hacker News', 'hn', 'https://news.ycombinator.com/rss'),
    new FeedChoice('Reddit', 'reddit', 'https://www.reddit.com/.rss'),
    new FeedChoice(
      'Slashdot',
      'slashdot',
      'http://rss.slashdot.org/Slashdot/slashdotMain'
    ),
    new FeedChoice('Digg', 'digg', 'http://digg.com/rss/top.rss'),
    new FeedChoice(
      'Product Hunt',
      'producthunt',
      'https://www.producthunt.com/feed'
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
      'Allianz für Cybersicherheit ACS Aktuelle Informationen',
      'AfCAktInfo',
      'https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.allianz-fuer-cybersicherheit.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/ACS_RSSNewsfeed.xml'
    ),
  ];
}
