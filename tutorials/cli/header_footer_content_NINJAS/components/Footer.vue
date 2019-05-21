<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
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
                copyright: "Copyright 2019 Vue ninjas"
            }
        },
        created(){
            bus.$on('titleChanged', (data)=>{
                this.title = data;
            })
        }
    };
</script>

<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }
    p{
        color: lightpink;
        text-align: center;
    }
</style>