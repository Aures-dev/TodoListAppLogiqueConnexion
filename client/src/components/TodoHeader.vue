<script setup>
import { computed, ref, watch } from "vue";
const emit = defineEmits(['add', 'update'])
const newvalue = ref('');
const updateItem = ref({});
function envoieTache() {

    emit('add', newvalue.value);
    console.log(newvalue.value);
    newvalue.value = ''
}

const props = defineProps({
    item: Object
})
let uptache = ref()
function envoieUpdateTache() {
    uptache.value = { id: updateItem.value.id, text: modif.value }
    emit("update", uptache.value)
    console.log("eeeeeee", uptache.value);
    updateItem.value = {};
}

//je recupere la  tache à modifier
watch(() => props.item, (newvalue) => {
    updateItem.value = newvalue
    console.log("todoHeader", updateItem.value);

})

//je stocke la valeur du nouveau input
const modif = ref("")
function recup(event) {
    modif.value = event.target.value
    console.log(event.target.value
    );
}
</script>

<template>
    <header>
        <h1 class="titre">Todo List App</h1>
        <form @submit.prevent>
            <fieldset v-if="!updateItem.text" role="group">
                <input v-model="newvalue" placeholder="Tâche a faire">
                <button @click="envoieTache">Ajouter</button>
            </fieldset>
            <fieldset v-else role="group">
                <input :value="updateItem.text" @input="recup">
                <button @click="envoieUpdateTache">Modifier</button>
            </fieldset>

        </form>
    </header>

</template>

<style>
.titre {
    text-align: center;
    color: cadetblue;
}
</style>