<template>
  <div class="container-fluid">
    <div id="app">
      <div class="card main-card">
        <div class="card-block">
          <div class="flex-container">
            <input v-model="newTodoText" class="text form-control flex-item" />
            <button v-on:click="addTodo" class="btn btn-primary flex-item">
              Add Todo
            </button>
          </div>

          <input v-model="doneFilter" type="checkbox" /> Show only done
        </div>

        <ul class="list-group list-group-flush">
          <li
            v-for="todo in todos"
            :key="todo.text"
            class="list-group-item flex-container"
          >
            <p class="flex-item todo-text">{{ todo.text }}</p>
            <button
              v-on:click="toggleDone(todo)"
              class="btn btn-default flex-item"
            >
              {{ todo.done ? "Done" : "Not Done" }}
            </button>
            <button
              v-on:click="removeTodo(todo)"
              class="btn btn-danger flex-item"
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexComponent",
  data: function() {
    return {
      newTodoText: "",
      doneFilter: false
    };
  },
  methods: {
    saveState() {
      localStorage.setItem("todos", this.$store.getters.toJSON);
    },
    loadState() {
      if (localStorage.getItem("todos")) {
        this.$store.commit("loadJSON", localStorage.getItem("todos"));
      }
    },
    addTodo() {
      if (this.newTodoText != "") {
        // action for mutate
        this.$store.commit("addTodo", this.newTodoText);
        this.newTodoText = "";
        this.saveState(); // can be replaced by the action doing ajax call
      }
    },

    removeTodo(todo) {
      this.$store.commit("removeTodo", todo);
      this.saveState();
    },

    toggleDone(todo) {
      if (todo.done) {
        todo.done = false;
      } else {
        todo.done = true;
      }

      this.$store.commit("updateTodo", todo);
      this.saveState();
    }
  },
  computed: {
    todos() {
      if (this.doneFilter) {
        return this.$store.getters.doneTodos;
      } else {
        return this.$store.getters.allTodos;
      }
    }
  },
  mounted: function() {
    this.loadState();
  }
};
</script>
