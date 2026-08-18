<script lang="ts">
	import QRCode from 'qrcode';
	import { Config } from '../classes/Config';
	import { Helper } from '../classes/Helper';
	import type { Result } from '../model/Result';

	export let data: Result;

	let qrCode = '';

	const dateFormat: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	async function renderQrCode(link: string) {
		qrCode = link ? await QRCode.toDataURL(link, { errorCorrectionLevel: 'H' }) : '';
	}

	$: dop = data.published ? new Date(data.published).toLocaleDateString('de-DE', dateFormat) : '';
	$: renderQrCode(data.link);
</script>

<div class={Config.itemName} id={data.id}>
	<h3>{Helper.stripCdata(data.title)}</h3>
	<div class="contentWrapper">
		{#if data.image}
			<img src={data.image} alt="Content" id="contentImage" class="entryImage" />
		{/if}
		{#if data.content}
			<p class="entryContent">{Helper.stripCdata(data.content)}</p>
		{/if}
	</div>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- feed entries always link to external sites -->
	<a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a>
	<br />
	<span class="changed">{dop}</span>
	{#if qrCode}
		<img src={qrCode} alt="QR code of the link" class="QRCode" />
	{/if}
</div>

<style lang="sass">
.entry
  max-width: 80%
  text-align: left
  display: block
  margin-right: auto
  margin-top: 5rem
  padding: 2rem
  font-size: 2rem

  & a
    font-size: 1rem

.entryContent
  max-width: 70%
  font-size: 0.8em

.entryImage
  max-width: 40rem
  max-height: 23rem
  margin-right: 2rem

.contentWrapper
  display: flex
  flex-wrap: noqw
  width: 100%

.container
  margin-left: 0rem
  margin-right: 0rem

.QRCode
  position: absolute
  right: 0
  bottom: 0
  width: 15rem
  height: 15rem
  margin-right: 2rem
  margin-bottom: 2rem
  border: 1px solid black
  border-radius: 0.5rem
  background-color: white
  padding: 0.5rem
  box-shadow: 0 0 0.5rem black


</style>
