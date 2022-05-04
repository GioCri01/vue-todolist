

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
        ],

        toDoValue: "",

        
        
    },

    methods:{
        removeTodo(indice){
            confirm("sicuro di voler eliminare?")
            this.todos.splice(indice,1);
            
        },
        addTodo(){
            newTodo = {
                text: this.toDoValue,
                done: false,
            };
             
            
            this.todos.push(newTodo);
            
        }

    },
});