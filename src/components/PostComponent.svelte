<script lang="ts">
	import QRCode from 'qrcode';
	import { Config } from '../classes/Config';
	import type { Result } from '../model/Result';

	export let data: Result;

	let dateOfPublish = new Date(data.published);
	let qrCode: string;
	QRCode.toDataURL(data.link, { errorCorrectionLevel: 'H' }).then((url) => {
		qrCode = url;
	});
</script>

<div class={Config.itemName} id={data.id}>
	<h3>{data.title}</h3>
	<div class="contentWrapper">
		<img src={data.image} alt="Content" id="contentImage" />
		<p class="entryContent">{data.content.replace('<!--[CDATA[<p-->', '').replace(']]>', '')}</p>
	</div>
	<a href={data.link} target="_blank">{data.link}</a>
	<br />
	<span class="changed">{dateOfPublish.toLocaleString()}</span>
	<img src={qrCode} alt="qrQR Code of the Link" id="qrCode" />
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
  max-width: 30rem
  max-height: 13rem
  margin-right: 2rem

.contentWrapper
  display: flex
  flex-wrap: noqw
  width: 100%

.container
  margin-left: 0rem
  margin-right: 0rem

.qrCode
  position: absolute
  right: 0
  margin-left: auto
  margin-right: 5rem
  max-width: 8rem
  height: auto
</style>
