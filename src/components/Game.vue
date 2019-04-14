<template>
    <div>


        <template>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"> {{user}}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </nav>
            <button id="startButton" v-show="StartGame" type="button" v-on:click="start" class=" btn btn-primary">Start
                Game
            </button>
            <table v-show="Game" id="table"></table>

        </template>

        <div id="puzzle-container"></div>
        <transition name="fade">

        <div id="puzzle-words"></div>
        </transition>
        <transition name="bounce">

        <input v-show="solution" type="button" id="solveBTN" value="Solve puzzle"/>
        </transition>
    </div>

</template>

<script>
    import { Component, Prop, Vue } from 'vue-property-decorator';
    //import words from '/src/assets/Paraules/Words.json'
    @Component

    export  default class GameStart extends Vue {

        user = localStorage.getItem('Username');
        StartGame = true;

        Game = false;
        solution = false;


        start() {
            this.StartGame = false;
            this.Game = true;
           // document.getElementById('solveBTN').classList.add('d-none');
            /*var radoomWords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'w', 't'];
            var id = [];
            let tr = 0;
            let th = 0;
            let tableWords = JSON.parse(localStorage.getItem('Words'));
            let paraula = ['tr', 'th'];
            let table = document.getElementById('table');
            for (let i = 0; i < tableWords.length; i++) {

                let paraulaEscollida = paraula[Math.floor(Math.random() * ((paraula.length - 1) - 0 + 1))];


                if (paraulaEscollida == 'tr') {

                    for (let y = 0; y < tableWords[i].length; y++) {


                        let columna = document.createElement('tr');

                        tr++;

                        let fila = document.createElement('th');
                        th++;
                        fila.setAttribute('id', y + "" + y);
                        id.push(i + "" + y);
                        fila.innerHTML = tableWords[i][y].toUpperCase();
                        columna.appendChild(fila);
                        table.appendChild(columna);
                        columna.setAttribute('id', i + "" + y);


                    }
                }
                if (paraulaEscollida == 'th') {
                    let x = 0;
                    let ids = 0;
                    /*let find = tableWords.find(tableWords[i][0]);
                    console.log(find);*/
            /* let columna;


                    if (id.length != 0) {
                        columna = document.getElementById(id[ids]);
                    } else if (id.length == 0) {
                        columna = document.createElement('tr');
                        columna.setAttribute('id', i + "" + x);
                        id.push(i + "" + x);
                        tr++;
                    }


                    for (x; x < tableWords[i].length; x++) {

                        let fila = document.createElement('th');
                        th++;

                        fila.innerHTML = tableWords[i][x].toUpperCase();
                        columna.appendChild(fila);
                        fila.setAttribute('id', i + "" + x);
                        if (id.length == 0) {
                            table.appendChild(columna);
                        }

                        ids++;


                    }
                }

            }
            if (tr < th) {
                for (let i = 0; i < th; i++) {
                    let columna;
                    columna = document.getElementById(id[i]);
                    let count = columna.childElementCount;
                    for (let x = 0; x < count; x++) {
                        let fila = document.createElement('th');
                        let Randoom = radoomWords[Math.floor(Math.random() * ((radoomWords.length - 1) - 0 + 1))];
                        fila.innerHTML = Randoom.toLocaleUpperCase();
                        columna.appendChild(fila);
                        fila.setAttribute('id', i + "" + x + 100);

                    }


                }
            } else {
                for (let i = 0; i < th; i++) {
                    let table;
                    table = document.getElementById('table');
                    let count = table.childElementCount;
                    for (let x = 0; x < count; x++) {
                        let columna = document.createElement('th');
                        let Randoom = radoomWords[Math.floor(Math.random() * ((radoomWords.length - 1) - 0 + 1))];
                        columna.innerHTML = Randoom.toLocaleUpperCase();
                        table.appendChild(columna);
                        columna.setAttribute('id', i + x + 200);

                    }

                }
                /*let fila = document.createElement('th');
            fila.innerHTML = "hol" ;
            let columna;
            columna = document.getElementById(id[2]);
            columna.appendChild(fila);
            }

        */

            var requestURL ="http://localhost:3000";
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {

                var words = request.response;
                localStorage.setItem("Words", JSON.stringify(words));
                console.log(words);
                // Start a basic word game without customization !
                var gamePuzzle = wordfindgame.create(words, '#puzzle-container', '#puzzle-words');

                $("#solveBTN").click(function(){
                    // Solve the puzzle !
                    var result = wordfindgame.solve(gamePuzzle, words);
                    console.log(result);
                });



            };

            this.calculateTime();
        }
        calculateTime(){
            setInterval(this.showResolve.bind(this), 10000);
            clearInterval();



        }
        showResolve(){
            this.solution = true;
            //document.getElementById('solveBTN').classList.remove('d-none');
        }

    }

</script>

<style>
    #puzzle-container {
        border: 1px solid black;
        padding: 20px;
        float: left;
        margin: 30px 20px;
    }

    #puzzle-container div {
        width: 100%;
        margin: 0 auto;
    }
    /* style for each square in the puzzle */

    #puzzle-container .puzzleSquare {
        height: 30px;
        width: 30px;
        text-transform: uppercase;
        background-color: white;
        border: 0;
        font: 1em sans-serif;
    }

    #puzzle-container button::-moz-focus-inner {
        border: 0;
    }
    /* indicates when a square has been selected */

    #puzzle-container .selected {
        background-color: orange;
    }
    /* indicates that the square is part of a word that has been found */

    #puzzle-container .found {
        background-color: green;
        color: white;
    }

    #puzzle-container .solved {
        background-color:green;
        color: white;
    }
    /* indicates that all words have been found */

    #puzzle-container .complete {
        background-color: green;
    }
    /**
    * Styles for the word list
    */

    #puzzle-words {
        padding-top: 20px;
        -moz-column-count: 2;
        -moz-column-gap: 20px;
        -webkit-column-count: 2;
        -webkit-column-gap: 20px;
        column-count: 2;
        column-gap: 20px;
        width: 300px;
    }

    #puzzle-words ul {
        list-style-type: none;
    }

    #puzzle-words li {
        padding: 3px 0;
        font: 1em sans-serif;
    }
    /* indicates that the word has been found */

    #puzzle-words .wordFound,   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        text-decoration: line-through;
        color: gray;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    /**
    * Styles for the button
    */

    #solve {
        margin: 0 30px;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
