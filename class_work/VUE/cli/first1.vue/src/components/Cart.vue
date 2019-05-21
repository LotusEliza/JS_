<template>
    <div>
        <h2>Cart</h2>
        <ul>
            <li v-for="(item, key) in cart_list" v-if="item">{{ productList[key].name }}, x{{ item }}. 
                Total: ${{ productList[key].price * item}} 
                <button type="button" @click='removeFromCart(key)'>Remove</button>
            </li>
        </ul>
        <strong>Total: </strong>${{ total }}
    </div>
</template>
<script>
import Products from '@/store/Products'

export default {
    data: function() {
                return{
                        productList: Products,
                        cart_list: JSON.parse(localStorage.cart || '{}'),
                }
            },
            computed: {
                total: function() {
                    var total = 0;
                    for (var i in this.cart_list) {
                        var prod = this.productList[i];
                        var count = this.cart_list[i];
                        total += prod.price * count;
                    }
                    return total;
                }
            },
            methods: {
                removeFromCart: function(key){
                    this.$delete(this.cart_list, key);
                    this.saveCart();
                },
                saveCart: function(){
                    localStorage.cart = JSON.stringify(this.cart_list);
                }
            },
            components: {
                    Products,
            }
}
</script>
<style>

</style>