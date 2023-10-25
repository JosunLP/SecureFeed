<script lang="ts">
	import FeedChoicesComponent from './FeedChoicesComponent.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<header>
	<div id="brand">
		<img src={logo} alt="Logo" />
		<h1>SecureFeed</h1>
	</div>
	<h4>
		<!--
      Powered by <a href="https://heise.de" target="_blank">Heise.de</a
      > & <a href="https://www.bsi.bund.de/" target="_blank">BSI</a>-->
	</h4>
	<p class="brand-subtitle">
		Made available by
		<a href="https://JosunLP.de" target="_blank">JosunLP.de</a>
	</p>
	<FeedChoicesComponent />
</header>

<style lang="sass">
@import '../sass/_color'

header
  text-align: left
  padding-left: 5rem
  height: 9rem
  margin-top: 0
  padding-top: 0
  top: 0
  left: 0
  right: 0
  width: 100%
  position: relative

#brand
  display: inline-flex

  h1
    padding: 0
    margin: 0
    font-size: 2rem
    font-weight: bold
    margin-bottom: -2rem

  img
    width: 2.5rem
    height: 2rem
    padding-right: 0.5em
    margin-top: 2rem

.brand-subtitle
  font-size: 0.9rem !important
  margin-top: -1rem
</style>
