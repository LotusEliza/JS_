(function(){
    var dom = document.querySelector('#todo'),
        add_input = dom.querySelector('.js_add_input'),
        add_btn = dom.querySelector('.js_add_button')
        list = dom.querySelector('.js_list'),
        app_btn = dom.querySelector('.js_app_button'),
        list_arr = JSON.parse(localStorage.getItem('todo') || '[]'),
        item_template = document.getElementById('todo_item_template').innerText;

    function save() {
        localStorage.setItem('todo', JSON.stringify(list_arr))//zapisivaem v postoiannoe hranilishe localstorage
    }

    function buildList() {
        list.innerHTML = '';
        list_arr.forEach(function(text, index)  {//callback function 
            var item = makeItem(text);//zapolniaem 
            list.appendChild(item);
            setItemActions(item, index);
        });
    };

    function makeItem(value) {
        var li = document.createElement('li');
        li.innerHTML = item_template.replace(/{{val}}/g, value); //chto naiti, chem zamenit
        return li;
    }

    function setItemActions(item, index) {//peredaem to cho sozdali
        var remove_btn = item.querySelector('.js_item_remove_btn'),
            edit_btn = item.querySelector('.js_item_edit_btn'),
            app_btn = item.querySelector('.js_app_button'),
            edit_input = item.querySelector('.js_item_input'),
            item_text = item.querySelector('.js_item_text');

        remove_btn.addEventListener('click', function() {//udaliaem znachenie iz massiva
            list_arr.splice(index, 1);
            changeAction();//massiv izmenilsia i perestraivaem 
        });

        edit_btn.addEventListener('click', function() {
            edit_btn.style.display = 'none';
            edit_input.style.display = 'inline-block';
            app_btn.style.display = 'inline-block';
            add_btn.style.display = 'inline-block';
            item_text.style.display = 'none';
        });

        app_btn.addEventListener('click', function() {
            list_arr[index] = edit_input.value;
            changeAction();
        });
    }

    function changeAction() {
        buildList();
        save();//sohranili massiv v local storage
    }

    add_btn.addEventListener('click', function() {
        var text = add_input.value;
        list_arr.push(text);
        add_input.value = '';
        changeAction();
    });


    buildList();

}())