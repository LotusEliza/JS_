(function($){
    var prod_list_ul = $('#js_prod_list');
    var bar = ['tea', 'coffee', 'lemon', 'vanilla'];
    var list = '<li class="ui-menu-item" role="menuitem"><a class="ui-all" tabindex="-1">' + bar.join('</a></li><li>') + '</li>';
    var cart_list_arr = JSON.parse(localStorage.getItem('cart') || '[]');
    var cart_list_ul=$('#js_cart_list');

    prod_list_ul.append(list);

    $("#list li").on("click", function(){
        cart_list_arr.push($(this).text());
        save();
        build_cart_list();
    });

    $(function () {
        $('#cart_list').on('click', 'li', function () {
            var myClass = $(this).attr("class");
            var index = myClass.substring(1, myClass.length);
            $(this).remove();
            cart_list_arr.splice(index, 1); //ubiraem li pod indexom
            save();
            build_cart_list();
        });
    });

    function save() {
        localStorage.setItem('cart', JSON.stringify(cart_list_arr))//Create JSON string from a JavaScript array. ["John","Peter","Sally","Jane"]
    }

    function build_cart_list() {
        cart_list_ul.html(''); //ochistili ul
        console.log(cart_list_arr);
        $(cart_list_arr).each(function(index, text){//[0:text1, 1:text2...]
            var li = makeItem(text, index); //return li with replaced text
            cart_list_ul.append(li); //prisoediniaem k ul vse li
        });
    }

    function makeItem(value, index) {
        var li = $('<li>');
        li.html(value);
        li.addClass("i"+index);
        return li;
    }

    build_cart_list();

}(jQuery));
