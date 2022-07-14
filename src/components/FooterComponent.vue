<template>
  <footer class="">
    <a href="https://josunlp.de/impressum/" target="_blank">Impressum - </a>
    <a href="https://josunlp.de/datenschutz-erklaerung/" target="_blank"
      >Datenschutzerklärung -
    </a>
    <a href="https://josunlp.de/disclaimer/" target="_blank">Disclaimer</a>
    <br />
    <p>
      The site works free of charge and non-profit. The source code can be
      viewed on github:
      <a href="https://github.com/JosunLP/SecureFeed" target="_blank"
        >SecureFeed</a
      >.
    </p>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FooterComponent',
});
</script>

<style lang="sass">
footer
  height: 1rem
  left: 0
  right: 0
  bottom: 0
  position: fixed
  display: inline-block
  text-align: center
  padding-bottom: 4rem
  padding-top: 1rem
  width: 100%

footer a
  text-decoration-line: none
  color: #bfefff

footer p a
  text-decoration: underline
</style>
