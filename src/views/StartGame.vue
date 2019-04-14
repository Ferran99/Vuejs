<template>

    <Game></Game>

</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';
    import Game from '@/components/Game.vue';

    @Component({
        components: {
            Game,
        },
    })
    export default class StartGame extends Vue {}
</script>

<style scoped>

</style>
