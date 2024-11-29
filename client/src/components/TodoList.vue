<script setup>
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";
import { ref } from "vue";
const msg = JSON.parse(sessionStorage.getItem('user'))


let id = 0;
const newItem = ref('');
const updateItem = ref({ id: 1, text: 'blablabla' });
const table = ref([
  { id: ++id, text: 'première tache' },
  { id: ++id, text: 'seconde tache' },
  { id: ++id, text: 'troisieme tache' }
]);

function removeTodo(element) {
  table.value = table.value.filter((t) => t !== element)
  console.log(element);


}
//function de recuperation du todo emit par le todoItem
function updateTodo(element) {
  updateItem.value = element// je prepare la variable à envoyer à todoheader
  console.log("todoItem", updateItem.value);

}

function ajoutTache(param) {
  table.value.push({ id: id++, text: param })
}

//j'effectue la mise à jour
function miseAJour(e) {
 table.value.forEach(element => {
  if (element.id=== e.id) {
    element.text = e.text
  }
 });
}

</script>

<template>
  <div class="container">
    <TodoHeader @add="ajoutTache" :item="updateItem" @update="miseAJour" />
    <p>Nom de l'utilisateur : {{ msg.name }}</p>

    <TodoItem :table="table" @update-response="updateTodo" @response="removeTodo" />

    <TodoFooter />
  </div>
</template>
<style>
.container {
  display: block;
}
</style>