  <script setup>

  const props = defineProps({
    table: Array
  });

 const emit = defineEmits(['response', 'updateResponse'])

 function removeTodo(element){
  emit ("response" , element)
 }

 //emission du todo à modifier vers todolist
 function updateTodo(element) {
  emit('updateResponse', element)  
 }
</script>
<template>
  <div>
  </div>
  <main>
    <div class="liste">
      <div class="name">
        <ul>
          <li v-for="element in table" :key="element.id" class="flex">
            <span>{{ element.text }}</span>
            <div class="flex ">
              <input type="checkbox" name="" id="">
              <p class="btn" >
                <img class="img" src="../assets/img/editer.png" alt="editer" @click="updateTodo(element)">
                <img class="img" src="../assets/img/supprimer.png" alt="suppression" @click="removeTodo(element)">
                
              </p>
            </div>
          </li>
        </ul>

      </div>
      <div class="statut">
        <span>En cours</span>
      </div>

    </div>
  </main>



</template>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
}
.flex{
  display: flex;
  justify-content: space-between;
}

.liste {
  display: flex;
  padding-inline: 30px;
  justify-content: space-between;
  background-color: rgb(217, 215, 212);
  border-radius: 10px;
}

.liste>div {
  margin-top: 15px;
}

input {
  width: 20px;
  height: 20px;
  margin-inline: 10px;
}

.delete {
  height: 20px;
  width: 20px;
  padding-bottom: 30px;
}
.btn{
  width: 45px;
  height: 45px;
  display: flex;
}
.img{
  display: block;
  width: 100%;  
}
</style>
