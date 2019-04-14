<template>
    <div>
        <template>
            <form v-if="inputWords" >
                <div class="form-group">
                    <h1 for="exampleInputEmail1">Input words</h1>
                    <input type="text" class="form-control" id="inputWords" name="word" placeholder="Enter a word"><br>
                    <button type="button" class="btn btn-success" v-on:click="addWord">Add</button>
                    <button type="button" v-on:click="finishAddWords" class="btn btn-danger"><router-link to="/game">Finish</router-link></button>
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


        addWord() {
            let word = document.getElementById('inputWords').value;
            this.words.push(word);
            console.log(this.words);
        }

        finishAddWords() {
            let word = document.getElementById('inputWords').value;
            this.words.push(word);
            localStorage.setItem("Words", JSON.stringify(this.words));

            this.inputWords = false;

        }
    }


</script>

<style scoped>

</style>
