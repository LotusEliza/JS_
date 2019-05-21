<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
import { bus } from "../main";

    export default {
        props: {
            title: {
                type: String
            }
        },
        data(){
            return{
                // title: "Header - Vue ninjas",
            }
        },
        methods:{
            changeTitle: function () {
                // this.title = "Vue Wizards";
                // this.$emit('changeTitle', 'Vue Wizards');
                this.title = 'Vue Wizards'; //change in this component
                bus.$emit('titleChanged', 'Vue Wizards'); //change in footer component
            }
        }
    };
</script>

<style scoped>
    header{
        background: lightcoral;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>