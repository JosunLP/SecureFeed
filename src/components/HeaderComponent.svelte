<script lang="ts">
	import FeedChoicesComponent from './FeedChoicesComponent.svelte';
	import logo from '$lib/assets/logo.png';
	import { Config } from '../classes/Config';
</script>

<header>
	<div id="brand">
		<img src={logo} alt="Logo" />
		<h1>SecureFeed</h1>
	</div>
	<b class="version">{Config.version}</b>
	<p class="brand-subtitle">
		Made available by
		<a href="https://JosunLP.de" target="_blank">JosunLP.de</a>
	</p>
	<FeedChoicesComponent />
</header>

<style lang="sass">
@import '../sass/_color'
@import '../sass/_mixin'

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
  @include dontTouch

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
  margin-top: 0.5rem
  margin-bottom: 1rem
  @include dontTouch

.version
  font-size: 0.8rem
  margin-top: -0.5rem
  margin-bottom: 1.5rem
  @include dontTouch
</style>
