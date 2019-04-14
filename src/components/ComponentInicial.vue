<template>
    <div>
        <template>
            <form v-if="inputWords" >
                <div class="form-group">
                    <h1 for="exampleInputEmail1">Input words</h1>
                    <input type="text" class="form-control" id="inputWords" name="word" placeholder="Enter a username"><br>
                    <button type="button" v-on:click="finishAddWords" class="btn btn-danger"><router-link to="/game">Start</router-link></button>
                </div>
            </form>

        </template>

    </div>
</template>

<script>
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component

    export  default class ComponentInicial extends Vue {

        inputWords = true;
        words = [];




        finishAddWords() {
            let user = document.getElementById('inputWords').value;
            this.words.push(user);
            localStorage.setItem("Username", this.words);

            this.inputWords = false;

        }
    }


</script>

<style scoped>

</style>
