<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <todo-list :todos="todos"></todo-list>
      <todo-add></todo-add>
    </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import ToDoAdd from './components/ToDoAdd.vue'

export default {
  name: 'app',
  components: {
    'todo-list': ToDoList,
    'todo-add': ToDoAdd
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: [
        {text : 'Tarea 1'},
        {text : 'Tarea 2'}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  transition: all 0.3s ease-out;

  &:hover {
    color: #35495E;
  }
}
</style>
