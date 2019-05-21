
(function($){
    // document.addEventListener('DOMContentLoaded', function() {
    //
    // })

    // $(function(){
    //
    // });

    var dom = $('#todo'),
        add_input = dom.find('.js_add_input'),
                    // $(dom, '.js_add_input')
        add_btn = dom.find('.js_add_button'),
        list = dom.find('.js_list'), // ul
        // list_arr = JSON.parse(localStorage.getItem('_todo') || '[]'),
        list_arr = $.parseJSON(localStorage.getItem('todo') || '[]'), //kluch "t_odo' - massiv znacheniy [0:text1, 1:text2...]
                                                                    // JSON.parse('[1, 5, "false"]'); // [1, 5, "false"}
    // arr = localStorage.getItem('_todo'); //["dv","fsdf","sdasd"]
        item_template = $('#todo_item_template').text();


    function save() {
        localStorage.setItem('todo', JSON.stringify(list_arr))//Create JSON string from a JavaScript array. ["John","Peter","Sally","Jane"]
        // localStorage.todo = JSON.stringify(list_arr);
    }

    function buildList() {
        list.html(''); //ochistili ul
        /* list_arr.forEach(function(text, index)  {
            var item = makeItem(text);
            list.appendChild(item);
            setItemActions(item, index);
        }); */

        $(list_arr).each(function(index, text){//[0:text1, 1:text2...]
            var item = makeItem(text); //return li with replaced text
            list.append(item); //prisoediniaem k ul vse li
            setItemActions(item, index); // peredaem li i ego index
        })


    };

    function makeItem(value) {
        var li = $('<li>');
        // li.innerHTML = item_template.replace(/{{val}}/g, value);
        li.html(item_template.replace(/{{val}}/g, value)); //zameniaem {val) na nash text ([0:text1])
        return li;
    }

    function setItemActions(item, index) {
        var remove_btn = item.find('.js_item_remove_btn'),
            edit_btn = item.find('.js_item_edit_btn'),
            edit_input = item.find('.js_item_input'),
            item_text = item.find('.js_item_text');
        remove_btn.on('click', function() {
            list_arr.splice(index, 1); //ubiraem li pod indexom
            changeAction(); //build list again and save to local storage
        });

        edit_btn.on('click', function() {
            //edit_input.style.display = 'inline-block';
            edit_input.show(); //show input type='text
            // item_text.style.display = 'none';
            item_text.hide(); //hide span with text
        })
    }

    function changeAction() {
        buildList();
        save();
    }

    add_btn.on('click', function() {
        var text = add_input.val(); //berem znachenie vvedennoe v input type=text
        list_arr.push(text); //dobavliaem v massiv znachenie [0: "dv"]
        console.log(list_arr);
        add_input.val(''); //ochishaem input text
        changeAction(); //build list again and save to local storage
    });


    buildList();

}(jQuery));