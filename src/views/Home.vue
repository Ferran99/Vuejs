<template>

  <div class="home">
    <Component-Inicial></Component-Inicial>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComponentInicial from '@/components/ComponentInicial.vue';

@Component({
  components: {
    ComponentInicial,
  },
})
export default class Home extends Vue {}
</script>
