<template>
        <div id="product-list">
        <ul>
             <li v-for="(item, key) in products">{{ item.name }} - ${{ item.price }}
                <button type="button" @click='addToCart(key)'>Add</button>
            </li>
        </ul>
        </div>
</template>

<script>

export default {
            data: function() {
                return{
                    cart_list: JSON.parse(localStorage.cart || '{}'),
                }
            },
            computed: {
                products() {
                    return this.$store.state.products;
                },
            },
            methods: {
                addToCart: function(key){
                    if(void 0 === this.cart_list[key]){
                        this.$set(this.cart_list, key, 1);
                    } else {
                        this.cart_list[key]++;
                    }
                    this.saveCart();
                },

                saveCart: function(){
                    localStorage.cart = JSON.stringify(this.cart_list);
                }
            },
        };
</script>

<style scoped>
    #product-list{
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list ul{
        padding: 0;
        list-style-type: none;
    }
    #product-list li{
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
</style>