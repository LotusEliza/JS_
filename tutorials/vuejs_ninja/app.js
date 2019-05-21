
new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>'
    },
    methods:{
        greet: function(time){
          return 'Good ' + time +' ' + this.name;
        }
    }
});

//**************************** Events

new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods:{
        add: function (inc) {
            this.age += inc;
        },
        substract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert("you clicked me!")
        }
    }
});


//********************** Two-way Data Binding
new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods:{
    }
});

// **************Computed Properties

new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    // methods:{
    //     addToA: function () {
    //         console.log('addToA');
    //         return this.a + this.age;
    //     },
    //     addToB: function () {
    //         console.log('addToB');
    //         return this.b + this.age;
    //     }
    // },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        }
    }


});



//********************Dynamic CSS Classes
new Vue({
    el: '#vue-app',
    data: {
     available: false,
     nearby: false,
    },

    computed: {
        compClasses: function () {
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

// //********************Conditionals
new Vue({
    el: '#vue-app',
    data: {
        error: false,
        success: false
    },

    computed: {
    }
});

// // *******************Looping with v-for

new Vue({
    el: '#vue-app',
    data: {

        characters:['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas:[
            {name: 'Ryu', age:25},
            {name: 'Yoshi', age:35},
            {name: 'Ken', age:55},
        ]
    },

    computed: {
    }
});

// // *************************Multiple Vue Instances

var one = new Vue({
    el: '#vue-app-one',
    data: {

        title: 'Vue app one',
        greet: 'Good morning!'
    },
    methods: {
        changeTitle: function () {

        }
    },
    computed: {
        greet: function () {
            return 'Good morning!';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two',

    },
    methods: {
        changeTitle: function () {
            one.title = "Title changed";
        }
    },
    computed: {
        greet: function () {
           return 'Good night!'
        }
    }
});

two.title="Change from outside";

// // **********************************Components

Vue.component('greeting',{
    template: '<p>Hey there Im reusable component {{ name }}.<button v-on:click="changeName">Change name</button></p>',
    data: function () {
        return{
            name: "Yoshi",
        }
    },
    methods: {
        changeName: function () {
            this.name = 'Mario';
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
});

var two = new Vue({
    el: '#vue-app-two',
});


// ********************************************Refs

new Vue({
    el: '#vue-app',
    data: {
        output: 'Your fav food'

    },
    methods: {
      readRefs:function () {
          // console.log(this.$refs.input.value);
          this.output = this.$refs.input.value;

          console.log(this.$refs.test.innerText);
      }
    }
})



