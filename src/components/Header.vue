<template>
  <header>
    <div id="brand">
      <img src="@/assets/logo.png" />
      <h1>SecureFeed</h1>
    </div>

    <h4><!-- 
      Powered by <a href="https://heise.de" target="_blank">Heise.de</a
      > & <a href="https://www.bsi.bund.de/" target="_blank">BSI</a>-->
    </h4>
    <h5>
      Made available by
      <a href="https://JosunLP.de" target="_blank">JosunLP.de</a>
    </h5>
    <select id="feedChoice">
      <option value="https://www.heise.de/security/rss/news.rdf"
        >Heise Security News RSS</option
      >
      <option value="https://www.heise.de/security/rss/alert-news.rdf"
        >Heise Security Alert RSS</option
      >
      <option value="https://corsify.de/API.php?apiMode=feed&feedMode=atom&dataUrl=https://www.heise.de/developer/rss/news-atom.xml"
        >Heise Developer RSS</option
      >
      <option
        value="https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471"
      >
        BSI (Presse-, Kurzmitteilungen und Veranstaltungshinweise)</option
      >
      <option
        value="https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_WID.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471"
      >
        BSI Kurzinformationen des CERT-Bund zu Sicherheitslücken und
        Schwachstellen in IT-Systemen</option
      >
      <option
        value="https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_BuergerCERT.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471"
      >
        BSI Sicherheitshinweise des Buerger-CERT</option
      >
      <option
        value="https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_Produktzertifizierung.xml;jsessionid=C141D473EE32323BEAB05A41D119B51E.internet471"
      >
        BSI Produktzertifizierung</option
      >
      <option
        value="https://corsify.de/API.php?apiMode=feed&feedMode=rss&dataUrl=https://www.allianz-fuer-cybersicherheit.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/ACS_RSSNewsfeed.xml"
      >
        Allianz für Cybersicherheit ACS Aktuelle Informationen</option
      >
    </select>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  text-align: left;
  padding-left:5rem;
  height: 6rem;
}

h4,
h5 {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

#brand {
  display: inline-flex;
}

#brand h1 {
  padding: 0;
  margin: 0;
}

#brand img {
  width: 2.5rem;
  height: 2rem;
  padding-right: 0.5em;
}

#feedChoice,
#feedChoice:focus,
#feedChoice:scope {
  color: white;
  background-color: #006882;
  border-color: #006882;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  border-radius: 0;
  border-color: none;
  padding-left: 0;
}
</style>
