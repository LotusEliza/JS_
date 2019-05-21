<template>
    <div>
        <h1>List all ninjas</h1>
        <ul>
            <li v-for="ninja in ninjas">{{ ninja }}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                ninjas: ['Yoshi', 'Mario', 'Ruy']
            }
        },
        methods:{
            greeting: function () {
                return "Heyyyy cow boy!"
            }
        },
    };
</script>

<style scoped>
    h1{
        color: green;
    }
</style>

