<script lang="ts">
	import QRCode from 'qrcode';
	import { Config } from '../classes/Config';
	import { Helper } from '../classes/Helper';
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
