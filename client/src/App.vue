<script setup>
import TodoList from "./components/TodoList.vue";
import signIn from "./views/signInView.vue";
import signUP from "./views/signUpView.vue";


</script>

<template>
  <!-- <signIn></signIn> -->
  <RouterView></RouterView>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
