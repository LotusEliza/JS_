<template>
    <div id="cart">
        <ul>
            <li v-for="(item, key) in cart_list" >
                {{ products_list[key].name }} x {{ item }} = ${{ products_list[key].price * item}}
                <button type="button" @click='removeFromCart(key)'>Remove</button>
            </li>
        </ul>
        <strong>Total: </strong>${{ total }}
    </div>
</template>
<script>

export default {
           data: function() {
                return{
                      products_list: this.$store.state.products,
                      cart_list: JSON.parse(localStorage.cart || '{}'),
                }
            },
            created(){
                    this.products_list = this.$store.state.products;
            },
            computed: {
                total: function() {
                    var total = 0;
                    for (var i in this.cart_list) {
                        var prod = this.products_list[i];
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
            }
}
</script>

<style scoped>
    #cart{
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #cart ul{
        padding: 0;
        list-style-type: none;
    }
    #cart li{
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
</style>