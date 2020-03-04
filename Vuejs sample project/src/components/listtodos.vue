<template>
    <div>
        <table>
            <thead>
                <th>ToDo Text</th>
            </thead>
            <tbody>
                <tr v-for="(todo,i) in todos" :key="i">
                    <td>{{todo.text}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListTodosComponent',
    data: function(){
        
        return {
           // todos:[]
        }
    },
    methods:{
         loadState() {
            if (localStorage.getItem('todos')) {
                // dispatching the commit action on the 'loadJSON' mutation 
                // to load the data
                this.$store.commit('loadJSON', localStorage.getItem('todos'));
            }
        },
    },
    mounted: function() {
        this.loadState();
    },
    computed: {
        todos() {
            if (this.doneFilter) {
                return this.$store.getters.doneTodos;
            } else {
                return this.$store.getters.allTodos;
            }
        }
    }
}
</script>
