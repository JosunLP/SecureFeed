<template>
  <q-page class="row items-center justify-evenly">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from 'src/components/HeaderComponent.vue';
import MainComponent from 'src/components/MainComponent.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { HeaderComponent, MainComponent, FooterComponent },
});
</script>
