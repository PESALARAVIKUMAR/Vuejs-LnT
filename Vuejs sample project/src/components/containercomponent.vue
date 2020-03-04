<template>
  <div>
      <h2>To Do Component with List</h2>
      <VuexComponent></VuexComponent>
      <hr>
      <h2>To Do Component with only List</h2>
      <ListTodosComponent></ListTodosComponent>
  </div>
</template>

<script>
import VuexComponent from './vuexcomponent.vue';
import ListTodosComponent from './listtodos.vue';
export default {
    name : 'ContainerComponent',
    components:{
        VuexComponent,
        ListTodosComponent
    }
}
</script>