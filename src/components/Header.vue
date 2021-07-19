<template>
  <header>
      <div id="brand">
        <img src="@/assets/logo.png" />
        <h1>SecureFeed</h1>
      </div>

      <h2>Powered by <a href="https://heise.de" target="_blank">Heise.de</a><!-- & <a href="https://t3n.de">t3n.de</a>--></h2>
      <h4>Made available by <a href="https://JosunLP.de" target="_blank">JosunLP.de</a></h4>
      <select id="feedChoice">
        <option value="https://www.heise.de/security/rss/alert-news.rdf">Heise Security Alert RSS</option>
        <option value="https://www.heise.de/security/rss/news.rdf">Heise Security News RSS</option>
        <!--<option value="https://t3n.de/tag/software-infrastruktur/rss.xml">t3n RSS</option> t3n is currently not sending the tight header-->
      </select>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header {
  text-align: left;
  padding-left: 2rem;
  height: 8rem;
}

#brand {
  display: inline-flex;
}

#brand h1 {
  padding: 0;
  margin: 0;
}

#brand img {
  width: 2rem;
  height: 2rem;
  padding-right: 0.5em;
}

#feedChoice, #feedChoice:focus, #feedChoice::selection {
  color: white;
  background-color: #006882;
  border-color: #006882;
  padding: 0.2rem;
}

</style>