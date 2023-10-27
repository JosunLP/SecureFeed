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
  height: 9rem
  margin-top: 2rem
  padding-top: 0
  top: 0
  left: 0
  right: 0
  width: 50%
  margin-left: 5rem
  position: relative

#brand
  display: inline-flex
  align-items: center
  margin-bottom: 1rem

  h1
    padding: 0
    margin: 0
    font-size: 4rem
    font-weight: bold
    margin-bottom: -2rem

  img
    width: 4.5rem
    height: 4rem
    padding-right: 0.5em
    margin-top: 2rem

.brand-subtitle
  font-size: 0.9rem !important
  margin-top: -1rem
  margin-bottom: 1rem
</style>
