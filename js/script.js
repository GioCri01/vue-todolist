

const app = new Vue ({
    el: '#app',

    data :{
        todos:[
            {
                text: "comprare il latte",
                done: false,
            },

            {
                text: "comprare il pane",
                done: true,
            },

            {
                text: "pagare la bolletta della luce",
                done: false,
            },

            {
                text: "andare dal barbiere",
                done: true,
            },

            {
                text: "rinnovare RCA",
                done: false,
            },
        ]
        
    },

    methods:{
        removeTodo(indice){
            this.todos.splice(indice,1);
            confirm("sicuro di voler eliminare?")
        }

    },
});